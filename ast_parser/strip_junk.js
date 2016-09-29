var path = require('path');

var input = require(path.resolve(process.argv[2]));

var result = input
    .filter(i => !i.undocumented)
    .filter(i => !i.inherited)
    .map(i => {
        delete i.meta;
        delete i.comment; 
        return i;
    })

console.log(JSON.stringify(result, null, 2));