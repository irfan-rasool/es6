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


