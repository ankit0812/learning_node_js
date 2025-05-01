const path = require('path');

console.log(__dirname);
console.log(__filename);

//Base file Name

console.log(path.basename(__filename));

//Dir Name

console.log(path.dirname(__filename));

//File Extension
console.log(path.extname(__filename));

//Path Object
console.log(path.parse(__filename));

//Concatenate Paths 
console.log(path.join(__dirname, 'textFolde', 'hello_world.html'));
