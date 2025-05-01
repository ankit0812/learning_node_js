// (function (exports, require, module, __filename, __dirname) {

// })

// console.log(`exports : ${exports}`);
// console.log(`require : ${require}`);
// console.log(`module : ${module}`);
// console.log(`__filename : ${__filename}`);
// console.log(`__dirname : ${__dirname}`);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My Name is ${this.name} and age is ${this.age}`);
    }
}

module.exports = Person;