const url = require('url');

const myURL = new URL('https://api.classplusapp.com/app/home?id=10&type=student');

console.log(myURL.href);

console.log(myURL.toString());

console.log(myURL.host);

console.log(myURL.hostname);

console.log(myURL.pathname);

console.log(myURL.searchParams);