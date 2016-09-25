var path = require('path');

var input = require(path.resolve(process.argv[2]));

var result = input
    .filter(i => i.kind === 'module')
    .map(m => {
        var memebers = input
            .filter(i => i.memberof === 'module:' + m.name)
            .map(i => {
                var result = { 
                    name: i.name,
                    kind: i.kind
                };

                if(i.alias === 'module:' + m.name)
                    result.default = true;

                return result;
            });

        return { 
            name: m.name,
            kind: 'module',
            members: memebers
        };
    })

console.log(JSON.stringify(result, null, 2));