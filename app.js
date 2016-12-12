/*
* let and const examples:
* */

// let has a block scope advantage which var was missing. chk example
/* if (true) {
    let age = 30;
}
console.log(age); // o/p => Uncaught ReferenceError: age is not defined */

/*let age = 40;
 if (true) {
 let age = 30;
 }
 console.log('age: ', age); // o/p => age:  40 */


/*
* CONST examples :
* */

/* const AGE = 30;
AGE = 40; // o/p => error because u can't change the values
*/


/*const AGES = [10, 20, 30, 40];
AGES.push(50);
console.log(AGES);
// o/p => this won't give u error it will print all the values. Because we are not changing the reference only the value. That is why we are able to change
*/

// const OBJ1 = {
//     age: 40
// }
// OBJ1.age = 30;
// console.log(OBJ1); // o/p Object {age: 30} again same thing. We are not changing reference only the value.


/*
* Hoisting:
* Hoisting doesnt work in es6
*
* */

/*age = 30;
console.log(age);
let age; // o/p => app.js:46 Uncaught ReferenceError: age is not defined
 */

// While in case of using var this will work. See Examnple:
/*age = 30;
console.log(age);
var age; // o/p => 30
 */

// Hoisting another example:

/*function doSomeThing () {
    console.log(age);
}
let age = 30; doSomeThing(); // o/p 30
 */

/*
function doSomeThing () {
 console.log(age);
 }
 doSomeThing(); let age = 30;  // o/p Uncaught ReferenceError: age is not defined
 */

/*
* ++++++++ Bottom line is declare first in ES6 then use otherwise it will give us error
* */

/*
* New way to write functions:
* */
/*var doSomeThing = () => console.log(age);
let age = 30; doSomeThing();   // o/p  30*/

// with one line and one param:
// var doSomeThing = age => console.log(age);
// doSomeThing(40);   // o/p  40

// with one line and two param:
// var doSomeThing = (age, name) => console.log(age, name);
// doSomeThing(40, 'irfan');   // o/p  40 "irfan"

// destructring:

// objec example
/*function  getValues() {
    return {
        age : 32,
        name : 'irfan rasool'
    }
}

let { age , name} = getValues() ;
console.log(age, name); // o.p => 32 "irfan rasool"
*/


// array example
/*function  getValues() {
    return [32, 'irfan rasool'];
 }

 let [age , name] = getValues() ;
 console.log(age, name); // o.p => 32 "irfan rasool"
 */

// Error case:
// array example
/*function  getValues() {
    return {
        age : 32,
        name : 'irfan rasool'
    }
}

let [age , name] = getValues() ;
console.log(age, name); // o.p => app.js:123 Uncaught TypeError: getValues is not a function because we are returning
// object and assigning as like array
/*

