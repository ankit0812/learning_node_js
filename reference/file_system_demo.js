const { error } = require('console');
const fs = require('fs');
const path = require('path');


// //Create Folder 

// fs.mkdir(path.join(__dirname, '/testFolder'), {}, error => {
//     if (error) throw error;
//     console.log("Folder Created !!");
// });

// //Create and write to file 

// fs.writeFile(path.join(__dirname, '/testFolder', 'hello.txt'), 'Hello World from File System', error => {   // Overwrites already existing file completely.
//     if (error) throw error;
//     console.log('File was written to .... ');
    
//     //Append to file 

//     fs.appendFile(path.join(__dirname, '/testFolder', 'hello.txt'), ' This is the updated text', error => {  // Append text already existing file.
//         if (error) throw error;
//         console.log('File was updated .... ');
//     });
// });

//Read from file
fs.readFile(path.join(__dirname, '/testFolder', 'hello.txt'), 'utf8', (error, data) => {
    if (error) throw error;
    console.log('Read was successful ..')
    console.log(data);
});

//Rename file

fs.rename(path.join(__dirname, '/testFolder', 'hello.txt'), path.join(__dirname, '/testFolder', 'byeworld.txt'), error => {
    if (error) throw error;
    console.log('Rename was successful')
});