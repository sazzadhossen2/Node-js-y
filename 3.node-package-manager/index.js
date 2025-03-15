const lodash = require('lodash');

const names =['sazzad','hossen','shamim'];
const capitalize =lodash.map(names, lodash.capitalize);

console.log(capitalize);