const Person = require('./Person')
console.log("Hello World for NodeJS..");

const currentPerson = new Person('Ankit', 30);
console.log(currentPerson);

currentPerson.greeting();