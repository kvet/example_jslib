var path = require('path');
var input = require(path.resolve(process.argv[2]));

var mapAny = anyObject => {
    if(anyObject.kind === 'class')
        return mapClass(anyObject);

    return {
        longname: anyObject.longname,
        name: anyObject.name,
        kind: anyObject.kind,
        scope: anyObject.scope
    };
};

var mapClass = classObject => {
    var members = input
        .filter(i => i.memberof === classObject.longname);

    return {
        longname: classObject.longname,
        name: classObject.name,
        kind: 'class',
        members: members
            .map(m => mapAny(m))
    };
};

var mapModule = moduleObject => {
    var members = input
        .filter(i => i.memberof === moduleObject.longname);

    return {
        longname: moduleObject.longname,
        name: moduleObject.name,
        kind: 'module',
        members: members
            .map(m => {
                var result = mapAny(m);
                result.scope = m.scope;

                if(m.alias === moduleObject.longname)
                    result.default = true;

                return result;
            })
    };
};

var result = input
    .filter(i => i.kind === 'module')
    .map(m => mapModule(m));

console.log(JSON.stringify(result, null, 2));