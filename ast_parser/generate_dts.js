var path = require('path');
var fs = require('fs');
var input = require(path.resolve(process.argv[2]));

var indent = string => {
    return string.split('\n').map(l => `    ${l}`).join('\n');
} 

var files = {};
for (let moduleObject of input.filter(i => i.kind === 'module')) {
    var requireds = []; 

    var resolve = longname => {
        var found = input.filter(i => i.longname === longname)[0];
        if(!found) {
            // NOTE: possible error
            return longname;
        }
        if(found.memberof) {
            if(found.memberof === moduleObject.longname) {
                return found.name;
            }

            var parent = input.filter(i => i.longname === found.memberof)[0];
            if(parent.kind === 'module') {
                requireds.push({
                    name: found.name,
                    from: `./${parent.name}`
                });
                if(found.alias === parent.longname) {
                    requireds[requireds.length - 1].default = true;
                }
                return found.name;
            }
        }
    };

    var generateAny = anyObject => {
        if(anyObject.kind === 'class') {
            return generateClass(anyObject);
        }
        if(anyObject.kind === 'interface') {
            return generateInterface(anyObject);
        }
        if(anyObject.kind === 'typedef') {
            return generateTypedef(anyObject);
        }

        return '';
    };

    var generateClass = classObject => {
        let augments = classObject.augments || [];
        let ext = augments.length ? ` extends ${resolve(augments[0])}` : '';

        let memebers = [];
        memebers.push(`constructor${genFnSign(classObject)}`);
        for (let member of input.filter(i => i.memberof === classObject.longname)) {
            memebers.push(`${member.scope === 'static' ? 'static ' : ''}${member.name}${member.kind === 'function' ? genFnSign(member) : ''}`)
        }

        return `class ${classObject.name}${ext} {\n${memebers.map(indent).join('\n')}\n}`;
    };

    var generateInterface = interfaceObject => {
        let augments = interfaceObject.augments || [];
        let ext = augments.length ? ` extends ${resolve(augments[0])}` : '';

        let memebers = [];
        for (let member of input.filter(i => i.memberof === interfaceObject.longname)) {
            memebers.push(`${member.name}${member.nullable ? '?' : ''}: ${resolve(member.type.names[0])};`)
        }

        return `interface ${interfaceObject.name}${ext} {\n${memebers.map(indent).join('\n')}\n}`;
    };

    var generateTypedef = typedefObject => {
        return `interface ${typedefObject.name} {\n${indent(genFnSign(typedefObject))}\n}`;
    };

    let genFnSign = fnSign => {
        let params = (fnSign.params || []) 
            .map(p => `${p.name}${p.optional ? '?' : ''}: ${resolve(p.type.names[0])}`);
        let returns = fnSign.returns && resolve(fnSign.returns[0].type.names[0]);
        return `(${params.join(', ')})${ returns ? `: ${returns}` : '' };`;
    };

    let members = [];
    for (let moduleMember of input.filter(i => i.memberof === moduleObject.longname)) {
        var defaultExport = moduleMember.alias === moduleObject.longname ? 'default ': '';
        members.push(`export ${defaultExport}${generateAny(moduleMember)}` );
    }

    let requires = [];
    for (let required of requireds.reduce((result, required) => {
        let existingFrom = result.filter(r => r.from === required.from)[0];
        if(!existingFrom) {
            existingFrom = { from: required.from, names: [] };
            result.push(existingFrom);
        }

        if (required.default) {
            existingFrom.default = required.name;
        } else {
            existingFrom.names.push(required.name);
        }

        return result;
    }, [])) {
        requires.push(`import ${required.default || ''}${required.default && required.names ? ', ' : ''}${required.names ? `{ ${required.names.join(', ')} }` : '' } from '${required.from}';`);
    }
    files[moduleObject.name] = `${requires.join('\n')}\n\n${members.join('\n\n')}`;
}

try {
    fs.mkdirSync(path.resolve('dts'));
} catch(e) {}
for (let file in files) {
    try {
        fs.unlinkSync(path.resolve('dts', file + '.d.ts'));
    } catch(e) {}
    fs.writeFileSync(path.resolve('dts', file + '.d.ts'), files[file]);
}