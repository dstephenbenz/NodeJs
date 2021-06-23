const global = require('./One.js');
const fs = require('fs')
// const files = fs.readdirSync("./");
// fs.readdir("./", (err, files) => {
//     if (err) {
//         console.log(err);
//     }
//     else console.log(files);
// });
//const files = fs.readFileSync("./test.txt", "utf-8");
fs.readFile("./test.txt", "utf8", (err, files) => {
    if (err) console.log(err);
    else console.log(files);
})


//global.func1();


//global.func2();
//global.dummy();
var obj = new global.myClass('stephen');
obj.myFunc();

global.myFunc1(30, 40);
global.help();


