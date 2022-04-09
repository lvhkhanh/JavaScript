# JavaScript
TODO: check internet connection
## Track changes
## Control Keys
### F5, F12
## Open window, popup, modal
## Certificate
Learn Intermediate JavaScript
https://www.codecademy.com/profiles/Khanh.Le Learn Asynchronous JavaScript
https://www.codecademy.com/profiles/Khanh.Le/certificates/705dcb15de0da4dd9d9fc4f3274b430e Learn JavaScript Course
## Versions
### ES6 2015
```
let // define variable values block scope vs var global, function scope
= : assigned Value
== or === : implicit check just value, strict equality type and value
initialization: declare and assign value
let aVar = "value A";
const PI = 3.14; // declare a constant, does not change, must initialize
const obj = {f: 'f1'};
obj = ...; // error
obj.f = ...; // ok
string, number, bigint, boolean, undefined, and symbol
template literals
`PI: ${PI}`;
function funcA(){ ... }
setTimeout(funcA, 500); // how to use function with params => anonymous function, arrow function
setTimeout(function(){....}, 500);
setTimeout(() => {....}, 500);
! : logical not
const anArray = [1,2,3];
anArray.push(4);
const len = anArray.length;
delete anArray[2]; // undefined, remove value at index 2, index starts from 0
anArray.splice(2, 1); // from index 2 remove 1 item
for (var i=0; i<len; i++){...}
while(true){...} // remmber to break
anArray.forEach(item => {});
anArray.forEach((item, index) => {}); // cannot add break statement
anArray.find(item => item === "some value")
anArray.filter(item => item.keyN === "some value") // what different from .find()
anArray.some(item => item.keyN === "some value") // return boolean check
anArray.map(item => { item.keyM = "some value"; return item;})
anArray.reduce((sum,curr) => sum += curr, 0)
Promise
class A extends B {
  constructor(p){
    super(p);
  }
}
export/import
```
## Cheatsheets
## Log
### Log4js
### 
## Official
### https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
## Books
### https://www.syncfusion.com/ebooks/ecmascript_6_succinctly
### https://www.syncfusion.com/ebooks/javascript
## Paths
### https://www.codecademy.com/paths/pass-the-technical-interview-with-javascript/tracks/getting-started-with-data-structures-js/modules/intro-to-js-data-structures-and-algorithms/articles/data-structure-apis-js
### https://www.codecademy.com/paths/create-a-back-end-app-with-javascript/tracks/bapi-javascript-fundamentals/modules/intro-to-javascript-for-apis/lessons/introduction-to-javascript/exercises/console
### https://www.codecademy.com/paths/create-video-games-with-phaser/tracks/game-dev-learn-javascript-basics/modules/game-dev-learn-javascript-basics/lessons/introduction-to-javascript/exercises/console
## Courses
### https://www.codecademy.com/learn/learn-how-to-code
### https://www.codecademy.com/learn/introduction-to-javascript
### https://www.codecademy.com/learn/learn-node-sqlite
### https://www.codecademy.com/learn/learn-d3
### https://www.codecademy.com/learn/make-a-website
### https://www.codecademy.com/learn/learn-testing-for-web-development
### https://www.codecademy.com/learn/learn-javascript-unit-testing
### https://www.codecademy.com/learn/javascript-errors-debugging
### https://www.codecademy.com/learn/deploy-a-website
### https://app.ultimatecourses.com/course/javascript-basics
### https://www.udacity.com/course/javascript-design-patterns--ud989
### https://www.udacity.com/course/javascript-testing--ud549
### https://www.udacity.com/course/es6-javascript-improved--ud356
### https://www.udacity.com/course/object-oriented-javascript--ud711
### https://www.udacity.com/course/javascript-promises--ud898
### https://www.udacity.com/course/asynchronous-javascript-requests--ud109
### https://www.udacity.com/course/javascript-and-the-dom--ud117
### https://www.udacity.com/course/intro-to-javascript--ud803
### https://app.pluralsight.com/library/courses/cypress-end-to-end-javascript-testing/table-of-contents
### https://codelabs.developers.google.com/codelabs/maps-platform-101-js/index.html?index=..%2F..index
### https://codelabs.developers.google.com/codelabs/community-visualization/index.html?index=..%2F..index
### https://www.codecademy.com/search?query=javascript
### https://www.codecademy.com/learn/learn-node-js
### https://www.codecademy.com/learn/learn-express
### https://www.codecademy.com/learn/learn-phaser
https://www.codecademy.com/learn/asynchronous-javascript

https://www.codecademy.com/learn/javascript-errors-debugging

https://www.codecademy.com/learn/learn-javascript-unit-testing

https://www.codecademy.com/learn/build-interactive-websites

https://www.codecademy.com/learn/learn-jquery



[Introduction - mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)

[Intro to JavaScript](https://www.udacity.com/course/intro-to-javascript--ud803)

[Object-Oriented JavaScript](https://classroom.udacity.com/courses/ud711)

[JavaScript Design Patterns](https://classroom.udacity.com/courses/ud989) => https://app.pluralsight.com/score

[JavaScript Promises](https://classroom.udacity.com/courses/ud898)

[JavaScript Testing](https://classroom.udacity.com/courses/ud549)

* [JavaScript Tutorial](https://www.sololearn.com/Course/JavaScript/)
* [Introduction To JavaScript](https://www.codecademy.com/courses/introduction-to-javascript/) - [@Khanh.Le](https://www.codecademy.com/Khanh.Le)
* [JavaScript Basics](https://app.ultimatecourses.com/course/javascript-basics) - [@Team](https://ultimatecourses.com/my-account/join-team/d7cb65fb9a7c76488e1cd6cf8686238d) [_](https://ultimatecourses.com/affiliates)


```
.map() over .forEach()
JSON
{
  "status": 200,
  "statusText": "OK"
  "message": "Meaning of the response",
  "data": [
    {
      "id": 1,
      "name": "Text 1"
    }
  ]
}
```
## Free
### https://www.codecademy.com/courses/build-interactive-websites/projects/piano-keys
## Refs
### defaultValue for track change
```
document.getElementById('textId').defaultValue; // = 'init';
```
