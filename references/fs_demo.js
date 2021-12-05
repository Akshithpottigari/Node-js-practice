// fs meanns File System, used to store, access, manage data on our OS.

const fs = require("fs"); //don't comment these
const path = require("path"); //don't comment these
//don't comment these
// creating a folder
// mnkdir() takes path, options, and a callback

// // we used path.join because, instead of typing whole file location, we just simply used it, and at the end, we concatenate 'test', in order to make a folder called test
// // here there are no options, so empty
// // for callback function, we wote a function 'err' basically what it does is if there is an error, it throws the error

// fs.mkdir(path.join(__dirname, './test'), {}, err =>{
//     if (err) throw err;
//     console.log('Folder created');
// })

// Create and write a file
// Write file overwrites the file, use append if you want don't want to clear the previous data
// fs.writeFile(
//     path.join(__dirname, "/test", "hello.txt"),
//     "Hello World!",
//     err => {
//   if (err) throw err;
//   console.log("File written");
// });

// // Append file

// fs.appendFile(
//     path.join(__dirname, "/test", "hello.txt"),
//     "Hello World! 2",
//     err => {
//   if (err) throw err;
//   console.log("File written");
// });

// // readFile
// fs.readFile(
//     path.join(__dirname, "/test", "hello.txt"),
//     'utf8', // wihtout uft8, it will give a raw Buffer
//     (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });


// Renaming the file 


fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  (__dirname, "/test", "Hello world.txt"),
  err => {
    if (err) throw err;
    console.log("File renamed");
  }
);
