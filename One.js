class myClass {

    constructor(name) {
        this.name = name;
    }
    myFunc() {
        console.log('HEllO' + this.name);
    }

}
module.exports.myClass = myClass;
let myFunc1 = (a, b) => {

    return a * b;
}
module.exports.myFunc1 = myFunc1;

help = () => {
    return console.log("Hi you are here to help");
}
module.exports.help = help;




// func1 = function myFunc() {

//     let a = 10;
//     let b = 20;
//     console.log("HI", a * b);
// }
// num = x = 23875;
// func2 = function devisePlan() {

//     console.log("do the thing as per the plan");
// }
// module.exports = {
//     // name:"ste",
//     // age : 34,
//     // addr :"chennai",
//     // location : "tamilnadu",
//     func1: func1,
//     num: num,
//     func2: func2,
//     dummy: () => { console.log('dummy function') }

// }


