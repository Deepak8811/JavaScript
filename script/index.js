// let cartQuantity = 0;
// document.querySelector('#cart-summary').innerText = `Your Bag has ${cartQuantity} Item`;


// function increaseItem() {
//   cartQuantity += 1;
//   document.querySelector('#cart-summary').innerText = `Your Bag has ${cartQuantity} Item`;
// }
// function decreaseItem() {
//   cartQuantity -= 1;
//   document.querySelector('#cart-summary').innerText = `Your Bag has ${cartQuantity} Item`;
// }
// function IncreaseByTwo() {
//   cartQuantity += 2;
//   document.querySelector('#cart-summary').innerText = `Your Bag has ${cartQuantity} Item`;
// }





// // Helper function to handle the response from the backend service
// async function handleResponse(response) {
//   if (!response.ok) {
//     throw new Error(`HTTP error: ${response.status}`);
//   }
//   return await response.json();
// }

// document.getElementById('loginForm').addEventListener('submit', async function (event) {
//   event.preventDefault();

//   const username = document.getElementById('loginUsername').value;
//   const password = document.getElementById('loginPassword').value;

//   try {
//     const response = await fetch('/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ username, password })
//     });
//     const data = await handleResponse(response);

//     if (data.authenticated) {
//       window.location.href = '/dashboard';
//     } else {
//       alert('Incorrect username or password. Please try again.');
//     }
//   } catch (error) {
//     console.error('Failed to authenticate:', error);
//     alert('Failed to authenticate. Please try again.');
//   }
// });

// document.getElementById('signupForm').addEventListener('submit', async function (event) {
//   event.preventDefault();

//   const username = document.getElementById('signupUsername').value;
//   const password = document.getElementById('signupPassword').value;

//   try {
//     const response = await fetch('/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ username, password })
//     });
//     const data = await handleResponse(response);

//     if (data.userCreated) {
//       alert('User created successfully. Please log in.');
//     } else {
//       alert('Failed to create user. Please try again.');
//     }
//   } catch (error) {
//     console.error('Failed to create user:', error);
//     alert('Failed to create user. Please try again.');
//   }
// });


// getName2();
// var x = 7;

// function getName() {
//   console.log("Deepak");
// }


// // var getName2 = () => {
// //   console.log("Rajesh")
// // }
// // var getName3 = function () {
// //   console.log("Abhishek")
// // }
// // getName3();
// getName();
// console.log(x);



// var x = 1;
// a();
// b();
// console.log(x);
// function a() {
//   var x = 10;
//   console.log(x);
// }
// function b() {
//   var x = 20;
//   console.log(x);
// }

// var a = 7;
// var a;
// if (a === undefined) {
//   console.log(true)
// } else {
//   console.log(false)
// }

//Javascript is a loosly or weakly type language

// var x;
// console.log(x);
// x = 10;
// console.log(x);

// x = `Hello  World`;
// console.log(x);
// x = null;
// console.log(x);

//scope chain

// function a() {
//   var x = 9;
//   console.log(x);
//   function b() {
//     console.log(x);
//   }
//   b()
// }
// a();
// // console.log(x)

// let a = 10;
// const c = 19;
// console.log(a);

// var b = 100;


//Higher order function

// function x() {
//   console.log('Deeapk')
// }
// function z() {
//   console.log('Hello')
// }
// function y(x) {
//   x();
// }
// y(x);
// y(z)


//
// const radious = [1, 3, 4, 5];
// function calculateArea(radious) {
//   let output = [];
//   for (let i = 0; i < radious.length; i++) {
//     output.push(Math.PI * radious[i] * radious[i])
//   }
//   return output;
// }
// console.log(calculateArea(radious));

// function calculateCircumference(radious) {
//   let output = [];
//   for (let i = 0; i < radious.length; i++) {
//     output.push(2 * Math.PI * radious[i]);
//   }
//   return output;
// }
// console.log(calculateCircumference(radious));
// function calculateDiameter(radious) {
//   let output = [];
//   for (let i = 0; i < radious.length; i++) {
//     output.push(2 * radious[i]);
//   }
//   return output;
// }
// console.log(calculateDiameter(radious));

// const area = function (radious) {
//   return Math.PI * radious * radious;
// }

// const calculate = function (radious, logic) {
//   let output = [];
//   for (let i = 0; i < radious.length; i++) {
//     output.push(logic(radious[i]))
//   }
//   return output;
// }
// console.log(calculate(radious, area))



// console.log(x)
// x = 5;
// const p=new Promise((resolve, reject)=>{
//   resolve(1);
// })
// console.log("1")
// setTimeout(function () {
//   console.log('3');
// },0);

// p.then((value)=>console.log(`promise`))

// console.log("2")


// order
// 1. normal javascript
// 2.promises
// 4. web apis like setTimeOut etc


// const redius = [1, 2, 3, 4, 5];

// const area = function (r) {
//   return Math.PI * r * r;

// }
// const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < redius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// }
// console.log(calculate(redius, area));
// console.log(redius.map(area))
// let a = 0
// let b = [];
// console.log(a == b);



//inside object

// let product = {
//   company: 'mango',
//   price: 650,
//   itemName: 't-shart',
//   rating: {
//     stars: 4.8,
//     noOfReviews: 46
//   },
//   displayPrice: function () {
//     return `₹${this.price.toFixed(2)}`;
//   }
// }
// console.log(`The ${product.itemName} costes ${product.displayPrice()}`);
// console.log(product.rating.stars);
// product.displayPrice(1000);


//Autoboxing

/*
Automatic conversion of primitive to object.
Primitive usse kahte hain jab koi normal string integer ya or kuch variable define karte hain ,
*/
// let x = 'Deepak chaurasiya'
// console.log(x.charAt(3));
// console.log(x.lastIndexOf('k'));
// console.log(x.split(' '));
// console.log(x.codePointAt(7));
// console.log(x.length)
// console.log(x.match(/Ch/gim));
// console.log(x.toUpperCase());
// console.log(x.toLowerCase());
// console.log(x.toString());
// console.log(x.replace(/\s/g,'_'))





// let a = 5;
// let b = a;
// console.log(`a=${a} and   b=${b}`);
// a = 8;
// console.log(`a= ${a} and   b=${b}`);
// b = 0;
// console.log(`a= ${a} and   b=${b}`);
// b = a;
// console.log(`a= ${a} and   b=${b}`);
//Jab primitive ko compare karte hain to unki value copy ho jati hain 


// let x = {
//   num: 6,
//   val: 10
// };
// let y = x;
// console.log(`x=${x.num} and y=${y.num}`);
// x.num = 9;
// console.log(`x=${x.num} and y=${y.num}`);
//But jab object ko compare karte hian to  unki reference copy ho jati hain. or aga refrence copy hua to kisi me change karenge to wo sab me chhanges aayega 

//Object jiss name se define kiya jata hai uss variable me refrence store hota hai 

// let p = { name: 'deepak', age: 24 };
//  let q={...p};
// // or
// let q = { name: 'deeapk', age: 24 }
// console.log(p == q);
// console.log(q === p);
/*Becouse p and q dono me un object ke reference store huye hain ; or dino ke reference different hain.
Object ko compare karne ke liye andar jake ek ek field ko check karna padta hai...ek bada sa function
likhna padega jisse hum deep equal method bolte hain .
*/

// Desturcturing :- Assignment is used when we have an object with known properties and want to extract its values into separate

// let product = {
//   company: 'mango',
//   price: 650,
//   'item-Name': 't-shart',
//   rating: {
//     stars: 4.8,
//     noOfReviews: 46
//   },
//   displayPrice: function () {
//     return `₹${this.price.toFixed(2)}`;
//   }
// }
// let company = product.company;
// console.log(company)
// or
// let { company } = product;
// console.log(company);
// let { price, company } = product;
// console.log(price);


// let product = {
//   company: 'mango',
//   price: 650,
//   'item-Name': 't-shart',
//   rating: {
//     stars: 4.8,
//     noOfReviews: 46
//   },
//   displayPrice() {
//     return `₹${this.price.toFixed(2)}`;
//   }
// }
// console.log(product['item-Name']);
// console.log(product[`displayPrice`]());
// console.log(product[`company`]);
// console.log(product[`rating`].stars);
// console.log(product[`item-Name`]);
// let product2 = {
//   company: 'mango',
//   price: 650,
//   'item-Name': 't-shart',
//   rating: {
//     stars: 4.8,
//     noOfReviews: 46
//   },
//   displayPrice() {
//     return `₹${this.price.toFixed(2)}`;
//   }
// }

// function isIdentical(product1, product2) {
//   if (typeof product2 === !'Object' || typeof product1 === !'object') {
//     console.warn("Both  arguments should be objects");
//     return false;
//   }
//   if (product1 == product2) {
//     return true;
//   }
//   if (product1.company === product2.company
//     && product1.price === product2.price
//     && product1.rating === product2.rating
//     && product1.displayPrice() === product2.displayPrice()) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isIdentical(product, product2));
// console.log(isIdentical(product, "Hello"));
// // console.log(isIdentical(null, null));
// console.log(isIdentical(product2, product))





// let product = {
//   company: 'mango',
//   price: 650,
//   'item-Name': 't-shart',
//   rating: {
//     stars: 4.8,
//     noOfReviews: 46
//   },
//   displayPrice() {
//     return `₹${this.price.toFixed(2)}`;
//   }
// }
// console.log(product);
// console.log(typeof product)
// let str = JSON.stringify(product);
// console.log(typeof str)
// console.log(str);


// let newProduct = JSON.parse(str);
// console.log(newProduct)


// let newDate = new Date();
// console.log(`Today's date is ${newDate}`);
// console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear())
// console.log(newDate.getTime());
// // function getDaysInMonth(month,  


// let arr = [1, 2, 3, 4, 5]
// console.log(arr);
// arr.splice(2, 0, "Hey");
// console.log(arr);
// arr.splice(2, 3)
// console.log(arr)



//Break and countinue 

// let arr = [1, 2, 3, 4, 5, 6];
// function position() {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${arr[i]} is at the position ${i}`)
//   }
// }
// position();


// let arr = [2, 3, 4, 5, 8, 9, 3];
// function copyArr(arr) {
//   arr.slice(0, arr.length);
//   return arr;
// }
// console.log(copyArr(arr));


// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }


// let num = 2;
// let i = 0;
// while (i < 10) {
//   if (isPrime(num)) {
//     console.log(num);
//     i++;

//   }
//   num++;
// }

// while (true) {
//   if (isPrime(num)) {
//     console.log(num);
//     i++;
//     if (i > 10) {
//       break;
//     }

//   }
//   num++;
// }


// function reverse() {
//   for (let i = 10; i >= 0; i--) {
//     console.log(i);
//   }
// }
// reverse();
// for (let i = 0; i <= 10; i++) {
//   console.log(10 - i)
// }

// let arr = [1, -6, 5, 7, -98, 3, -4, 1, 5, -4];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     continue;
//   }
//   console.log(arr[i]);
// }


// let a=1;
// console.log(a/-0)




/*
Arrow function , callback function in javaScript
*/

// const greet = (count) => {
//   for (let i = 0; i < count; i++) {
//     console.log("Hello World");
//   }

// }
// greet(3)

// const square = (x) => x * x;
// console.log(square(2));


// const square = (x) => {
//   return x * x;
// }
// console.log(square(2));


// const calculate = (num1, num2, operation) => {
//   return operation(num1, num2);
// }

// const result = calculate(8, 9, (a, b) => {
//   return a * b;
// })
// console.log(result)


// const a = [4, 1, 6, -2, -5, 3, 2, -8, 6, 7];

// const test = (num) => {
//   // return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
//   return num < 0;
// }
// const result = a.findIndex(test);
// console.log(result);

// const a = [4, 1, 6, -2, -5, 3, 2, -8, 6, 7];
// a.forEach((num, index) => {
//   console.log(num, index)
// })


// const getCheese = () => {
//   setTimeout(() => {
//     const cheese = 'Paneer';
//     return cheese;
//   }, 2000)
// }
// const result = getCheese();
// console.log(result);
// // console.log(getCheese());//return undefine.



// const getCheese = (callback) => {
//   setTimeout(() => {
//     const cheese = 'Paneer';
//     callback(cheese);
//   }, 2000);
// }
// const makeDough = (cheese, callback) => {
//   setTimeout(() => {
//     const dough = cheese + " Dough";
//     callback(dough);
//   }, 2000);
// }
// const makePizza = (dough, callback) => {
//   setTimeout(() => {
//     const pizza = dough + " Pizza";
//     callback(pizza);
//   }, 2000);
// }

// getCheese((cheese) => {
//   makeDough(cheese, (dough) => {
//     makePizza(dough, (pizza) => {
//       console.log(pizza);
//     })
//   })
// })
// pizza->dough->paneer

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 3000);
// });
// dough
// myPromise
//   .then(handleFulfilledA, handleRejectedA)
//   .then(handleFulfilledB, handleRejectedB)
//   .then(handleFulfilledC, handleRejectedC);


// const ticket = new Promise((resolve, reject) => {
//   const isBoarded = true;
//   if (isBoarded) {
//     resolve('You are in the flight')
//   } else {
//     reject('You miss the flight')
//   }
// })

// ticket.then((data) => {
//   console.log('wohoo :', data)
// }).catch((data) => {
//   console.log('ohh :', data)
// }).finally((data) => {
//   console.log('I will always executed')
// })

// const getCheese = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const cheese = 'Paneer'
//       resolve(cheese)
//     }, 2000);
//   })
// }
// // console.log(getCheese())
// getCheese().then((data) => {
//   console.log(data)
// }).catch((data) => {
//   console.log(data)
// }).finally(() => {
//   console.log('I am alwaya executed');
// })

// const getCheese = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const cheese = 'Paneer'
//       resolve(cheese)
//     }, 1000);
//   })
// }
// const makeDough = (cheese) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dough = cheese + ' ' + 'dough'
//       resolve(dough)
//     }, 1000);
//   })
// }
// const bakePizza = (dough) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pizza = dough + ' ' + 'pizza'
//       // resolve(pizza)
//       reject('Bad pizza', pizza)
//     }, 1000);
//   })
// }

// getCheese().then((data) => {
//   console.log('Here is the cheese ', data)
//   return makeDough(data);
// }).then((data) => {
//   console.log('Here is the dough ', data);
//   return bakePizza(data);
// }).then((data) => {
//   console.log('Here is the pizza ', data)
// }).catch((error) => {
//   console.log('Error:', error)
// }).finally(() => {
//   console.log('Your pizza is ready')
// })


// async function orderPizza() {
//   const cheese = await getCheese();
//   // console.log('Here is the cheese ', cheese)
//   const dough = await makeDough(cheese);
//   // console.log('Here is the dough ', dough);
//   const pizza = await bakePizza(dough)
//   console.log('Here is the pizz:', pizza);
// }
// orderPizza();

//Async await me error ko handle karne ke liye try catch ka use karte hain

// async function orderPizza() {
//   try {
//     const cheese = await getCheese();
//     const dough = await makeDough(cheese);
//     const pizza = await bakePizza(dough)
//     console.log(pizza);
//   } catch (err) {
//     console.log('error occured', err)
//   }
// }
// orderPizza();





// const radius = [1, 2, 3, 4];

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// }
// console.log(calculateArea(radius));


// const calculateCircumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// }
// console.log(calculateCircumference(radius))
// const calculateDiameter = function (radius) {
//   const diameter = [];
//   for (let i = 0; i < radius.length; i++) {
//     diameter.push(radius[i] * 2);
//   }
//   return diameter;
// }
// console.log(calculateDiameter(radius));

// const area = (radius) => {
//   return Math.PI * radius * radius;
// }
// const circumference = (radius) => {
//   return 2 * Math.PI * radius;
// }
// const diameter = (radius) => {
//   return radius * 2;
// }
// const calculate = (radius, logic) => {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// }

// Array.prototype.calculate = function (logic) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]));
//   }
//   return output;
// }
// console.log(radius.map(area));
// console.log(radius.calculate(area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter)); 


// console.log(radius.map((radius) => {
//   return Math.PI * radius * radius;
// }))

// const result = radius.map((x) => {
//   return x.toString(2);
// })
// console.log(result)


// const arr = [5, 7, 2, 9, 3, 6, 9];
// //reduce take all the element of the array and come with  a single value. for ex= max,sum etc

// function sumArr(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumArr(arr));

// const result = arr.reduce(function (acc, curr) {
//   acc += curr;
//   return acc;
// }, 0);
// console.log(result)


// //Find maximum
// const max = arr.reduce((acc, curr) => {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, -10000)
// console.log(max);


// const GITHUB_API = 'https://api.github.com/users/Deepak8811';
// const user = fetch(GITHUB_API)
//   // console.log(user)
//   .then(response => response.json())



// user.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log("Error ", err);
// })



// let a = [1, 2, 3];
// // let b=[...a];
// // let b = a;
// let b = [1, 2, 3]
// console.log(b === a);
// b.push(4);
// console.log(a);
// console.log(b);



// let a = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// // const b = { ...a };
// let b = a;
// console.log(b === a);
// b.name = "Deepak";
// console.log(a);
// console.log(b);



// let p = {
//   name: 'deepak',
//   age: 24
// };
// // let q = { ...p };
// let q = p;
// // or
// // let q = { name: 'deeapk', age: 24 }
// console.log(p == q);
// console.log(q === p);


// const x = '1' - 1 + "1";
// console.log(x);



// var  x = 10;
// function deepak() {
//   console.log(x);
// };
// deepak();


// function a() {
//   let x = 19;
//   console.log(x);
// }
// a();
// console.log(x);//giev not define in any case even var let and const in every variable.

/**
 *
 * Variable scope in JavaScript is the region of the program where a variable is accessible. JavaScript has two types of scope: global and local.
 *
Global scope:
Variables declared outside of any function are globally scoped. This means that they can be accessed from anywhere in the program.

Local scope:
Variables declared inside of a function are locally scoped. This means that they can only be accessed from within that function.

The var keyword is used to declare variables in JavaScript. When you declare a variable with var, it is function-scoped by default. This means that it can only be accessed from within the function where it was declared.
For example, the following code declares a variable called name inside of a function called greet():


JavaScript
function greet() {
  var name = "John Doe";
  console.log(name); // "John Doe"
}

greet();

console.log(name); // ReferenceError: name is not defined
In this example, the variable name is only accessible from within the function greet(). When we try to access it outside of the function, we get a ReferenceError.
We can also declare variables with global scope using the var keyword. To do this, we simply declare the variable outside of any function. For example:
JavaScript
var name = "John Doe";

function greet() {
  console.log(name); // "John Doe"
}

greet();

console.log(name); // "John Doe"

In this example, the variable name is declared outside of any function, so it has global scope. This means that it can be accessed from anywhere in the program.

It is important to note that the var keyword is function-scoped by default. If you want to declare a variable with global scope, you must declare it outside of any function.

Difference between var, let, and const in JavaScript

In addition to var, there are two other keywords that can be used to declare variables in JavaScript: let and const.

let:
Variables declared with let have block scope. This means that they can only be accessed from within the block where they were declared.

const:
Variables declared with const are constants. This means that they cannot be reassigned.

For example, the following code declares a variable called name with block scope:

JavaScript
{
  let name = "John Doe";
  console.log(name); // "John Doe"
}

console.log(name); // ReferenceError: name is not defined

In this example, the variable name is only accessible from within the block where it was declared. When we try to access it outside of the block, we get a ReferenceError.
The following code declares a constant called name:
JavaScript
const name = "John Doe";

name = "Jane Doe"; // TypeError: Assignment to constant variable.

In this example, we try to reassign the value of the constant name. However, this is not allowed, and we get a TypeError.
Conclusion
The var keyword is used to declare variables in JavaScript. When you declare a variable with var, it is function-scoped by default. This means that it can only be accessed from within the function where it was declared. You can also declare variables with global scope using the var keyword, but you must declare them outside of any function.
In addition to var, there are two other keywords that can be used to declare variables in JavaScript: let and const. Variables declared with let have block scope, and variables declared with const are constants.
*/


//Console table is a new intresting things

// const a = 9;
// let b = 19;
// var c = 199;
// console.table([a, b, c]);


//Creating own methods 

// const mark = [45, 78, 91, 56, 32, 12, 23, 34, 45, 56, 67, 89, 98, 76, 54, 321];
// Array.prototype.getMin = function () {
//   return Math.min(...this)
// }
// Array.prototype.getEven = function () {
//   return this.filter((num) => num % 2 == 0)
// }
// console.log(mark.getMin());
// console.log(mark.getEven());
// console.table([mark.getEven(), mark.getMin()]);

// const obj = {
//   "1": "a",
//   1: "b",
//   [1]: "c"
// };
// console.log(obj[1]);  //c
// console.log(obj["1"]); //c
// console.log(obj[1]);  //c
// console.log(obj[`${[1]}`])  //c


//in javaScript all the key store in string  format so it will take any value but when we use ${} then also it convert into string format


//JavaScript quiz
//Post and pre incriment operator

// let x = 1;
// console.table(x++ + x);
// console.log(x++ + x);

// let outPut = 2 ** 3;
// console.log(outPut);

// const b = 3 ** 4;

//Double ** means is  exponentiation operator in JavaScript. Example : 2**3 means  2 raised to the power of 3.
// console.log(b);


// let y = 1;
// //triple +++ means  ++y + ++y + ++y
// // console.log(y++ + y)
// let b = ++y + ++y + ++y;
// console.log(b);




// let y = 10;
// let x = y++ + ++y;
// console.log(x);



// let x = 10;
// let y = ++x + ++x;
// let z = ++x + x++;
// console.log(x);
// console.log(z)
// console.log(y);

// In post incriment 1st use then increase and in pre incriment 1st increase and then use

//Revision of let const and var variable 

// let x = 10;
// function a() {
//   let x = 12;
//   x = 13;//reassignment is possible but redeclaration is not possible
//   console.log(x);
// }
// a();
// console.log(x);

// let p = 2;
// if (true) {
//   let p = 3;
//   console.log(p);
// }
// console.log(p);

// // 'let' have block level scope.

// const y = 19;
// function b() {
//   const y = 15;
//   // const y=1; //redeclaration is also not possible in const 
//   // y=20  //reAssignment is not possible  as it's constant
//   console.log(y);
// }
// b();
// console.log(y);
// //const is block level scope

//var have function scope.
// var a = 20;
// function c() {
//   var a = 30;
//   a = 40;
//   var a = 50;// reassignment and redeclaration is possible in var type of vbariable 
//   console.log(a);
// }
// c();
// console.log(a);

// var a = 50;
// console.log(a) //50
// if (1) {
//   var a = 70;
//   console.log(a);
// }
// console.log(a);//70
// const arr = [1, 2, 3];
// arr[10] = 10;
// console.log(arr.length);//11
// console.table(arr)
// console.log(arr[3])


// let x = 0.1 + 0.2;
// let y = 0.3;
// console.log(x === y);//false
// console.log(x == y);

// const preson = () => {
// const name = "John";
// return `Hello ${name}`;
// };
// console.log(preson());


// const fetchData = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }


// async function fetchDa(){
//   try {
//     const res = await fetch("");
//     const data = res.json();
//     console.log(data)
//   } catch (error) {
//     console.log('Error', error);
//   }
// }
// const variable = function (){

// }


//Immediately invoked function expression (IIFE);
// (function IIFE(name) {
//   const a = 5;
//   console.log(a);
//   console.log(`My name is ${name}!`);
// })('Deeapk');


// function greet(name, callback) {
//   console.log(`Hi there, ${name}!`);
//   callback();
// }
// function sayGoodBye() {
//   console.log(`See you later!`);
// }
// greet('Deepak', sayGoodBye);


//Higher order function.
// const radius = [1, 2, 3, 4, 5];
// const area = (r) => {
//   return Math.PI * r * r;
// }

// Array.prototype.calculateArea = function (logic) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]))
//   }
//   return output;
// }
// // const result = calculateArea(radius, area);
// // console.log(result)
// const ans = radius.map(area);
// console.log(ans);
// const result = radius.calculateArea(area)
// console.log(result)



// // const calculateArea = (radius) => {
// //   const output = [];
// //   for (let i = 0; i < radius.length; i++) {
// //     output.push(Math.PI * radius[i] * radius[i])
// //   }
// //   return output;
// // }
// // const result = calculateArea(radius);
// // console.log(result);


// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;
//     if (success) {
//       resolve('Promise  is resolved');
//     } else {
//       reject(Error("There was an error"));
//     }
//   }, 2000);
// });
// myPromise.then((data) => {
//   console.log(data);
// }).catch((err => {
//   console.error(err);
// }
// ));

// async function asyncFunction() {
//   try {
//     const responce = await myPromise;
//     console.log(responce)
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
// }
// asyncFunction();


// const a = [
//   { name: "john" },
//   { name: "Jane" }
// ];
// const b = [...a];
// b[0] = { name: "Deepak" }
// // b[0].name = 'Deepak';
// b[1].age = 35;

// console.log(a);
// console.log(b);

//Due to call by reference

// const p = {
//   name: "Gulshan",
//   age: 30,
//   salay: 3600
// }
// const p1 = { ...p };
// p1.name = "Abhishek";
// console.log(p)
// console.log(p1)
// p1.degree = "cse";
// console.log(p);
// console.log(p1);


/*
 * Interview Questions
   1. take an array and loop its original properties.
 */

// Array.prototype.loopProperties = function () {
//   for (let key in this) {
//     if (this.hasOwnProperty(key)) {
//       console.log(`${key}: ${this[key]}`);
//     }
//   }
// }

// const arr = [4, 2, 9, "Hello", false, { name: "John" }, undefined, null, 0, -Infinity];
// arr.loopProperties();

// Array.prototype.extraProperty = 'Deepak';
// const myNewArray = [1, 2, 3, 4, 5];

// for (let key in myNewArray) {
//   // console.log(key + ": " + myNewArray[key]);
//   // con
// // const arr = [4, 2, 9, "Hello", false, { name: "John" }, undefined, null, 0, -Infinity];sole.log(myNewArray[key]);
//   console.log(key)
// }

// for (let key in myNewArray) {
//   if (myNewArray.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }


// //looping of an array me ye wala for loop nhi lagta hai.
// // for (let i = 0; i < myNewArray.length; i++) {
// //   console.log(i);
// // }


// Array.prototype.loopProperty = function () {
//   for (let key in this) {
//     if (this.hasOwnProperty(key)) {
//       console.log(`${key} : ${this[key]}`)
//     }
//   }
// }

// const arr = [4, 2, 9, "Hello", false, { name: "John" }, undefined, null, 0, -Infinity];
// arr.loopProperty();



// Array.prototype.extraProperty = 'Deepak chaurasiya';
// const arr = [1, 2, 3, 4, 5, 6];
// for (let index in arr) {
//   console.log(`${index}`);
// };
// for (let index in arr) {
//   if (arr.hasOwnProperty(index)) {
//     console.log(`${index}`);
//   }
// };
// Array.prototype.loopingArray = function () {
//   for (let key in this) {
//     if (this.hasOwnProperty(key)) {
//       console.log(`${key}:${this[key]}`)
//     }

//   }
// }
// arr.loopingArray();


//Creating custom forEach function

// arr.forEach((Element) => {
//   console.log(Element * 2);
// })
// Array.prototype.extraProperty = 'Deepak';
// for (let key in arr) {
//   console.log(key);
// }
// Array.prototype.customForEach = function (callback) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     if (this.hasOwnProperty(i)) {
//       // callback(this[i]);
//       output.push(callback(this[i], i, this));
//     }
//   }
//   return output;
// }

// function logic(element) {
//   return element * 10;
// }
//or
// const logic = (element) => {
//   return element * 100;
// }
// const result = arr.customForEach(logic);
// console.log(result)


/*
JavaScript important question.
Array destructuring and rest operator.
...z it meant rest of the value will assign in this array after destructuring the array.
it is known as a dstructuring pattern and it should be in the last  part of the array.
example:-
const [...b,a]=[1,2,3,4,5]    it is give error becouse rest operator should be in hte last after the array desturcturing.
const [a,...b] it is the correct pattern.

const [t, ...r, s] = [1, 2, 3, 4, 5]; give error becouse Rest element  must be last in the list or element.

Spread and rest operator:-
The Spread Operator is used to 'spread' an iterable into its elements, while the Rest Operator 'collects' multiple elements into an array.
*/

// const [x, y, ...z] = [1, 2, 3, 4, 5];
// console.log(`${x} ${y}`);
// console.log(z);


// const [a, b, c, d, e] = ['A', 'B', 'C', 'D', 'E'];
// console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);

// const [p, ...q] = [1, 2, 3, 4, 5];
// console.log(`The element in p array is:${p}, & the element in the q array is: ${q}`);
// console.log(q[p]);

// const [t, s, v, ...r] = [1, 2, 3, 4, 5];
// console.log(`${t}, ${s}, ${v}`);
// console.log(`${r}`);
// console.log(`${r[v]}`);
// console.log(`${r[t]}`);


// let a = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// const b = { ...a };
// // let b = a;
// console.log(b === a);
// console.log(a == b);
// console.log("------------------------");
// b.name = "Deepak";
// // console.log(a);
// // console.log(b);
// console.log("------------------------");
// b.gender = "Male";
// console.log(a);
// console.log(b);

// let a = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// // const b = { ...a };
// let b = a;
// console.log("------------------------");
// console.log(b === a);
// b.name = "Deepak";
// console.log(a);
// console.log(b);
// console.log("------------------------");
// b.gender = "Male";
// console.log(a);
// delete b.age;
// console.log(a);
// console.log(b);


// let a = [1, 2, 3, { name: "Deepak" }];
// let b = [...a];  //Isme array ke andar jo object rahte hain unke reference same ho jata hain 
// // let b = a;    // Isme pura sab kuch ka reference same ho jata hai. sab ka reference same rahta hai.

// b.push(4);
// console.log("------------------------");

// console.log(a);
// console.log(b);

// console.log("------------------------");

// b[3].name = 'Rahul';

// console.log("------------------------");

// console.log(a[3].name)
// console.log(b)
// console.log(a);

// b[3].age = 30;
// console.log("------------------------");

// console.log(a)
// console.log(b);

// console.log("------------------------------");
// console.log(a[3] === b[3]);//true

// //Means Array me jo object rahte hain unka shallow copy banta hai...it means unka reference bhi same hota hai.


// const person = {
//   name: "Deepak",
//   age: 30,
//   gender: "male",
//   education: "B.tech",
//   address: "Delhi"
// }
// const person1 = { ...person };
// console.log(person1 === person); // false
// console.log(person1 == person); // false
// console.log(JSON.stringify(person1) === JSON.stringify(person)); // true

// // console.log(JSON.stringify(person1))
// person1.city = "prayagraj";
// console.log(JSON.stringify(person1) === JSON.stringify(person)); // false

// console.log(person)
// console.log(person1)


/**
 Deep and shallow copy in javaScript
 */
// const originalObject = {
//   name: 'John Doe',
//   age: 30
// };

// const shallowCopy = Object.assign({}, originalObject);

// shallowCopy.name = 'Jane Doe';

// console.log(originalObject); //not change 
// console.log(shallowCopy); // { name: 'Jane Doe', age: 30 }


// const originalObject = {
//   name: 'John Doe',
//   age: 30
// };

// const shallowCopy = { ...originalObject };

// shallowCopy.name = 'Jane Doe';

// console.log(originalObject); //not change 
// console.log(shallowCopy); // { name: 'Jane Doe', age: 30 }


//Deep copy

// const originalObject = {
//   name: 'John Doe',
//   age: 30
// };

// const deepCopy = JSON.parse(JSON.stringify(originalObject));

// deepCopy.name = 'Jane Doe';

// console.log(originalObject); // { name: 'John Doe', age: 30 }
// console.log(deepCopy); // { name: 'Jane Doe', age: 30 }


// const originalObject = {
//   name: 'John Doe',
//   age: 30
// };

// const deepCopy = _.cloneDeep(originalObject);

// deepCopy.name = 'Jane Doe';

// console.log(originalObject); // { name: 'John Doe', age: 30 }
// console.log(deepCopy); // { name: 'Jane Doe', age: 30 }



//JavaScript quiz.
// let z = 0;
// console.log(z++ === ++z)
//Becouse we compair 0===1 post and pre incriment 

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const newArr = [...arr1, ...arr2];
// console.log(newArr);

// function sum(...args) {
//   return args.reduce((a, b) => a + b, 0);
// }

// This is called constructor method in the javaScript. It's used to create an object with properties that are passed as arguments.
// let x = new Number("4");
// console.log(x);
// console.log("----------------------------------")
// console.log(typeof x);//object


//JavaScript Quiz.

// let x = 1;
// console.log(typeof typeof x);
// console.log(typeof x)


// let x = 10 + 5.99;
// let y = 10 + 6.99;
// console.log(x);
// console.log(y);

// console.log(1 !== true)
// console.log(2 != true)
// console.log(NaN !== NaN)

// let newList = [1, 2, 3].push(4);
//this above line treat in newLish assign 4 now it is not an array so the below line give typeErrro
// console.log(newList.push(5));
//Both are same..
// let x = 3;
// console.log(x.push(5));

// let newList = [1, 2, 3];
// newList.push(4);
// console.log(newList);
// newList.push(5);
// console.log(newList);

// var a = 0;
// (function fun(a) {
//   console.log(a);
//   var a = 5;
// })(10)
// // fun(10);
// console.log(a);
//Becouse var type of variable have function  scope and if we use var then this value will be store in local memory of that particular function.

// const x = [{
//   name: "Deepak",
//   age: 40
// }];
// const y = [...x];
// y[0].age = 45;
// console.log("Original Array :", x);
// console.log("Shallow copy : ", y);


//Quiz

// const a = {
//   name: "Arya",
//   gender: "Female",
//   age: 24,
// };
// console.log(Object.keys(a));
// console.log(Object.values(a));
// console.table(`${Object.keys(a)} & ${Object.values(a)}`);

// let b = Object.entries(a);
// console.log(b);
// for (let i of b) {
//   if (i[0] === 'gender'){
//     i[1]='Male';
//   }
// }
// console.log('After changing the value', Object.fromEntries(b));

// var a = {};
// var b = { key: 'b' };
// var c = { key: 'c' };
// a[JSON.stringify(b)] = 123;
// a[JSON.stringify(c)] = 453;
// console.log(a[JSON.stringify(b)]);
// console.log(a[JSON.stringify(c)]);


// async function fetchData() {
//   //  const data=await fetch(https://jsonplaceholder.typicode.com/photos ).then((res)=> res.json());
//   const data = await fetch(jsonplaceholder.typicode.com / photos)
//   data.then((req, res) => {
//     return req.json();
//   });

// }

// async function fetchData() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/photos");
//   const json = await data.json();
//   return json;

// }
// fetchData().then((data) => {
//   console.log(data);
// })


// async function logMovies() {
//   const response = await fetch("a");
//   const movies = await emaresponse.json()nip;
//   console.log(movies);
// }
// const str = "abca"

// function check(str) {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = str.length - 1; i > 0; i--) {
//       if (str[i] === str[j]) {
//         // return true;
//         console.log(true);
//       } else {
//         return false;
//         // console.log(false);
//       }
//     }
//   }
// }
// check("absf");


// const fetchData = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/photos");
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     return err;
//   }
// }

// fetchData()
//   .then((data) => {
//     console.log(data)
//   })

//javaScript quiz
// var x = 1;
// var y = 2;
// var res1 = `${x + y}`;
// var res2 = x + y;
// console.log(typeof res1);
// console.log(typeof res2)
// console.log(res1, res2)
// console.log(res1 === res2)



// const fetchData = async () => {
//   try {
//     const res = await fetch('https://api.github.com/users/octocat');
//     const data = await
//       res.json();
//     return data;
//   } catch (err) {
//     console.log(err)
//   }
// }
// // fetchData()
// //   .then((data) => {
// //     console.log(data);
// //   })

// fetchData()
//   .then((result) => {
//     console.log(result)
//   }).catch((err) => {
//     console.log(err)
//   });

// const myPromise = new Promise((resolve, reject) => {
//   try {
//     setTimeout(() => {
//       resolve("Hello World!");
//     }, 3000);
//   } catch (error) {
//     reject(error.message);
//   }

// });

// myPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   });


// const promise = async () => {
//   const res = await myPromise();
//   const data = await res.json();
//   return data;

// }

//Obj comparision
// const obj1 = {
//   name: "Deepak",
//   age: 23,
// };
// const obj2 = {
//   name: "Deepak",
//   age: 23,
// };

// console.log(obj1 === obj2);
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

// const obj1 = {
//   name: "Deepak chaurasiya",
//   age: 23,
// }
// const obj2 = {
//   name: "Deepak chaurasiya",
//   age: 23,
// }

// const isEqual = (obj1, obj2) => {
//  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   } else {
//     for (let key in obj1) {
//       if (!obj2.hasOwnProperty(key)) {
//         return false;
//       }
//       if (obj1[key] !== obj2[key]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };
// console.log(isEqual(obj1, obj2));

// const isEqual = (obj1, obj2) => {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// };
// console.log(isEqual(obj1, obj2));


// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;
//     if (success) {
//       resolve("Data Loaded Successfully");
//     } else {
//       reject(Error("Data not loaded"));
//     }
//   }, 2000)
// })
// myPromise.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.error(err);
// })


// //order pizza -> cheese->dough->pizza,

// const makeCheese = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const cheese = "cheese";
//       if (cheese) {
//         resolve(cheese);
//       } else {
//         reject(Error('No Cheese'));
//       }

//     }, 2000);
//   })
// }

// const bakeDough = (cheese) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dough = cheese + ' ' + 'dough';
//       if (dough) {
//         resolve(dough);
//       } else {
//         reject(Error('No Dough'));
//       }
//     }, 2000);
//   })
// }


// const cookPizza = (dough) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // const pizza = `Your Pizza is Ready ${dough} + pizza`;
//       const pizza = dough + ' ' + 'pizza'
//       if (pizza) {
//         resolve(pizza);
//       } else {
//         reject(Error("Some Error Occurred"));
//       }
//     }, 2000);
//   });
// };

// const orderPizza = async () => {
//   try {
//     const cheeseResult = await makeCheese();
//     console.log(`The Cheese added to the Pizza: ${cheeseResult}`);
//     const doughResult = await bakeDough(cheeseResult);
//     console.log(`The Dough added to the Pizza: ${doughResult}`);
//     const finalResult = await cookPizza(doughResult);
//     console.log(`Here is your Pizza : ${finalResult}`);
//   } catch (error) {
//     console.log(`Error in ordering Pizza : ${error.message}`);
//   }

// };
// orderPizza();


//hasOwnProperty & Prototype


// Array.prototype.extraProperty = 'Deepak';
// const arr = [1, 2, 3, 4, 5];
// // console.log('Extra Property:', arr.extraProperty);

// // for (let key in arr) {
// //   console.log(`Intex is ${key} &  Value is ${arr[key]}`);
// // }
// for (let i in arr) {
//   if (arr.hasOwnProperty(i)) {
//     console.log(`Intex is ${i} &  Value is ${arr[i]}`);
//   }
// }

// const arr = [1, 2, 3, 'a', 'b', 'c'];

// Array.prototype.customforEach = function (callback) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(callback(this[i]));
//   }
//   return output;
// }

// const logic = function (element) {
//   return element * 10;
// };
// console.log(arr.customforEach(logic));

// const reduse = arr.reduce((acc, curr) => {
//   return acc += curr;
// }, 0);

// console.log(reduse);




// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.getDetails = function () {
//   return `Name :${this.name} , Age : ${this.age}`;
// }

// const person1 = new Person("John", 25);
// const person2 = new Person("Jane", 30);

// console.log(person1.getDetails());
// console.log(person2.getDetails());



//Buffor in nodejs 

// const buffer = Buffer.alloc(10);

// buffer.write("hello world");


// // Creating a buffer with specified size
// const buf1 = Buffer.alloc(10); // Allocates a buffer of size 10 bytes

// // Filling buffer with data
// buf1.write('Hello'); // Writes the string 'Hello' to the buffer

// // Reading data from buffer
// console.log(buf1.toString()); // Converts the buffer to string and prints 'Hello'

// // Creating a buffer from an array
// const buf2 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]); // Creates a buffer from an array of hexadecimal values

// // Reading data from buffer
// console.log(buf2.toString()); // Converts the buffer to string and prints 'buffer'

// // Combining buffers
// const buf3 = Buffer.concat([buf1, buf2]); // Concatenates buf1 and buf2 into buf3

// // Reading data from the combined buffer
// console.log(buf3.toString()); // Prints 'Hellobuffer'

// // Modifying buffer content
// buf1[0] = 0x48; // Changes the first byte of buf1 to the ASCII value of 'H'

// // Reading modified buffer
// console.log(buf1.toString()); // Prints 'Hello' with the first character changed to 'H'

// const buffer = Buffer.alloc(10);
// buffer.write("Deepak chaurasiya");
// console.log(buffer.length);
// console.log(buffer.toString());








// const fetchData = async () => {
//   try {
//     const res = await fetch("http://www.postalpincode.in/api/pincode/223224");
//     const data = await res.json();
//     return data
//   } catch (err) {
//     console.log(err)
//   }
// }
// fetchData().then((data) => {
//   console.log(data)
// })

// "use  strict";
// {

//   function show() {
//     console.log("Inside show")
//   }
//   show()
// }
// show()
// {
//   function show() {
//     // console.log(this === global ? true : false);
//     // console.log(this);
//     console.log("A");
//   }
//   if (true) {
//     show()
//   }
// }
// show()



// 6 promise uses in javascript

//1. loading data from api

// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("Failed to load data", error));


//2. waiting for multiple request to complete

// Promise.all([
//   fetch('https://api.example.com/data1'),
//   fetch('https://api.example.com/data2')
// ]).then(responses => {
//   return Promise.all(responses.map(res => res.json()));
// }).then(data => {
//   console.log(data)
// })



//User Authentication

// function loginUser(email, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (email === 'user@gmail.com' && password === 'password2') {
//         resolve({ userId: 1, profile: "user profile" })
//       } else {
//         reject(new Error('Invalid Credentials'));
//       }
//     }, 1000);
//   });
// };


//Data Processing pipeline 


//JavaScript Quiz

// const arr = [1, 2, 3, 4, 5];
// // console.log(arr[Symbol.iterator]());
// // for (let item of arr) {
// //   console.log(item * 2);
// // }


// console.log(arr[-2]);


// const checkPalindrom = (n) => {
//   let reverse = 0;
//   let temp = n;
//   while (temp > 0) {
//     reverse = reverse * 10 + Math.floor(temp % 10);
//     temp = Math.floor(temp / 10);
//   }
//   if (reverse === n) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const res = checkPalindrom(1234);
// console.log(res)

// console.log(5 % 2);


// javaScript quiz

// let a = +'2';
// let b = -'2';
// let c = '2';
// console.log(typeof c)
// console.log(typeof a);
// console.log(typeof b);
// console.log(a - b);
// console.log(a + b)

//Arrival

//javaScript clouser

//clouser means that an inner function access the variable and parameter of the outer function  even that the outer function has returned.

// function outerFunction() {
//   var outerVariable = 100;
//   function innerFunction() {
//     console.log(outerVariable);
//   }
//   return innerFunction;
// }
// const innerFunc = outerFunction();
// innerFunc();
// outerFunction()();


// function CountFunction() {
//   var counter = 0;
//   function IncreaseFunction() {
//     return counter++;
//   }
//   return IncreaseFunction;
// };
// let Func = CountFunction();
// console.log(Func());
// console.log(Func());
// console.log(Func());

// console.log(5>4>3);   //Explanation : 5>4 return true means 1 and then it checks if 1>3 so it will be false, so the whole expression becomes false.
// console.log(5>4>0);  //Explanation  : 5>4 return true means 1 and then  it checks if 1 > 0, so the result is true , hence the final output will be true.

// for(var i=0;i<5;i++){
//   setTimeout(function(){
//     console.log(i);
//   },1000)
// }

// let a = 1;
// let b = 2;
// let c = 3;


// a = b
// b = c
// c = a
// console.log(`${a} ${b} ${c}`);

// console.log(Math.abs(
//   0.1 + 0.2 - 0.3)
//   < Number.EPSILON);

//JavaScript Quiz

// function AryanKit(x, y, ...rest) {

// };
// console.log(AryanKit.length);


// const str = 'Deepak';
// const split = str.split("");
// console.log(split);

// const reverseStr = str.split('').reverse().join('');
// if (str === reverseStr) {
//   console.log('The string is palindrome')
// } else {
//   console.log("Not Palindrome")
// }
// console.log(reverseStr);



// const Str = "Hello World";
// const NewStr = Str.replace(/World/g, "Aryan");
// const split = NewStr.split(" ");
// console.log(split)
// console.log(NewStr);

// Event in javaScript

/*
Event are the action or occurrences that happen in the browser. These can be triggered by the user or by the
browser itself.

Event handling:
Event handling in how we response to these events. We write the code to react the
events , such as clicking a button, pressing a key or submitting a form.


const btn=document.querySelector("#myButton");
btn.addEventListener("click",function(){
    alert("You clicked me!");
});



1. click
2. Submit
3. keydown : occuse  when the user press any key on keyboard .
4. Keypress : Occurs when the user press any character on keyboard.
5. Contextmenu : occurs when the user right clicks on an element.
6. DblClick : Occurs when the user double-clicks on an element.
7. MouseDown : Occurs when the mouse button is pressed down over an element.
8. MouseUp : Occurs when the mouse button is released over an element.
9. MouseMove : Occurs each time the mouse moves ove an element.
10. MouseOver : Occurs when the mouse pointer enters an element.
4. mouseover
5. change : Occure when the value of an input element changes
6. load
7. resize
8. scroll
9. focus
10. blur
*/


// const str = "Deepak chaurasiya";
// const newStr = str.replace(/a/g, "*");// replace all 'a' with '*'
// console.log(newStr);
// const split = str.split(' '); // splits string
// console.log(split);

// const str = 'Deepak';
// const split = str.split("");
// console.log(split);

// const str = 'Hello! My name is deepak chaurasiya  and I am learning javascript';
// const arrayWithLetter = str.split('');
// const arrayWithWord = str.split(' ');
// console.log(arrayWithWord)
// console.table(arrayWithLetter)
// console.table(arrayWithWord)
// console.log(arrayWithLetter);

// let a = 2;
// let b = 20;
// b *= a * b + 10;
// console.log(b);
// let count = 0;
// const nums = [0, 1, 2, 3];
// nums.forEach(nums => {
//   if (nums) {
//     count += 1;
//   }
// })
// console.log(count);





// Clouser  : Means that the inner function  has access to the outer function’s variables because it is executed in the context of the outer function

// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   // y();
//   a = 100;
//   return y;
// }
// // x();
// const z = x();
// console.log(z)
// z();
// function x() {
//   var a = 10;
//   return function y() {
//     console.log(a);
//   }
// }
// const f = x();
// f();


// function z() {
//   var b = 900;
//   function x() {
//     var a = 10;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();

// function z() {
//   var b = 900;
//   function x() {
//     var a = 10;
//     function y() {
//       console.log(a, b);
//     }
//     return y;
//   }
//   return x;
// }
// const f1 = z();
// console.log(f1)
// const f2 = f1();
// console.log(f2)
// f2();


//interview question related to clouser

// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i)
//   }, 1000)
//   console.log("Deepak")

// }
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000 * i);
//   }
// }
// x();
// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000 * i);
//   }
// }
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function clouser(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, 1000 * i)
//     }
//     clouser(i);
//   }
// }
// x();



// function outest() {
//   var c = 20;
//   function outer(b) {
//     // var a = 10;
//     function inner() {
//       console.log(a, b, c);
//     }
//     // let a = 10;
//     return inner;
//   }
//   return outer;
// }
// let a = 100;
// // outer("Hello deepak")();
// // const fn = outest();
// // console.log(fn)
// // const fnOuter = fn("I am Deepak");
// // console.log(fnOuter)
// // fnOuter()
// // or 
// const fn = outest()("Hi!,I am Deepak");
// console.log(fn)
// fn()



// var is function scope and let,const has block level scope
// if (true) {
//   let x = 10;
//   // let x=1
//   console.log(x);
// }
// console.log(x)


//Data hiding and encapsulation  in JavaScript using clouser
//This counter variable can be access by anyone in program and change it for data privacy we use clouser.

// let counter = 0;
// function increaseCounter() {
//   counter++;
//   console.log(counter);
// }

// function counter() {
//   let count = 0;
//   return function increaseCount() {
//     count++;
//     console.log(count);
//   }
// }
// let incr1 = counter();
// incr1();
// incr1();
// // for (let i = 1; i <= 5; i++) {
// //   incr();
// // }
// //it is completely new count and it does not touch the above invoke function...this will be the fresh counter and it won't be the touch the above invocation
// //it form a clouser  so every time when you call the function it will have its own copy of variables
// console.log('---------------------')
// let incr2 = counter();
// incr2();


//now good way writting the above incriment and decriment  functions using constructor ...

// function Counter() {
//   var count = 0;
//   this.increaseCount = function () {
//     count++;
//     console.log(count);
//   };
//   this.decreaseCount = function () {
//     count--;
//     console.log(count);
//   }
// }
// var counter1 = new Counter();
// console.log(counter1)
// counter1.increaseCount();
// counter1.increaseCount();
// counter1.decreaseCount();
// counter1.increaseCount();

//This above constructor function may be convert into  class declaration  as below...





// class Counetr {
//   constructor() {
//     var count = 0;
//     this.increaseCount = function () {
//       count++;
//       console.log(count);
//     };
//     this.decreaseCount = function () {
//       count--;
//       console.log(count);
//     };
//   }
// }
// var Counetr1 = new Counetr();
// Counetr1.increaseCount();
// Counetr1.increaseCount();
// Counetr1.decreaseCount();


//Disadvantage of the clouser
//Clouser comes with disadvantage also 
/*
1. There over consuption  of memory because every time you call a method on an object, it creates a new set of variables.
it consume lot of mamory becouse of the clouser
2. Those variable  are not garbage collected if they are out of scope.

Garbage Collector:-

Garbage collector is like a program in the browswer or javascript engin  that takes care of memory management .It freeze the unutilize memory.
But modern  browser has a built-in Smart Garbage collector which will take care of those memory leaks .It this case the browser take care and see
which variable is not uses in program  then it should remove from memory .
example:-
*/

// function a() {
//   var x = 5, z = 6;
//   return function y() {
//     console.log(x)
//   }
// }
// let res = a();
// res();
//By the modern browswr z is removed from the memory becouse it is garbage collector



// function checkEquality(a, b) {
//   if (a == b) {
//     console.log("Equal")
//   } else {
//     console.log("Not Equal");
//   }
// }
// checkEquality(0, '0')

//JavaScript quiz
// let num = 1;
// let arr = ['A', 'B', 'C', 'D', 'E', 'F'];
// console.log(arr[num++]);
// console.log(arr[++num]);
// console.log(arr[--num])
// console.log(arr[num--])

//setTimeOut

// console.log('Start');

// setTimeout((callback) => {
//   console.log('callback')
// }, 5000);


// console.log('end');

// let startTime = new Date().getTime();
// let endTime = startTime;
// while (endTime <= startTime + 10000) {
//   // console.log(new Date().getTime() - startTime);
//   // console.log(Math.floor(Math.random() *  26) + 97);
//   // process.stdout.write('\u{1f4a9}');
//   // process.stdout.write("\x1b[32m\u{1f4a9}\x1b[0m");
//   endTime = new Date().getTime();

// }
// console.log('End of loop');


/*
Promise API:

1. Promise.all();
2.  Promise.race();
3. Promise.reject();
4. Promise.resolve();
5. Promise.allSettled();
6. Promise.any();

*/

//JavaScript quiz


// let x = 1;
// x = x + (x += 1);
// console.log(x);


/*

In this code, a function named x is defined. Inside the function, a variable num is assigned the value 10 without declaring it using var, let, or const, which makes it a global variable. Then, the function x is called. After the function call, console.log(num) is executed, attempting to log the value of num. Since num was assigned the value 10 inside the function x, which was executed before logging num, num is accessible in the global scope, and thus its value 10 is logged to the console.

*/
// function x() {

//   num = 10

// }

// x()

// console.log(num)

// let a = 10;
// a *= 5;
// console.log(a);

// a = 10;
// a= 'Hello';
// a=100;
// console.log(typeof a, a);
// console.log(a)



// const profile = {
//   name: "John Doe",
//   getName: () => {
//     console.log(this.name);
//   }
// };

// profile.getName();// undefine

// const profile={
//   name:"Deepak",
//   getName:function(){
//     console.log(this.name);
//   }
// }
// profile.getName()

// a = 10;
// function x() {
//   console.log(a);
// }
// x();
// console.log(a)




// //6 Async/await case uses in javaScript


// //1. Fetching data from an api

// async function fetchData() {
//   try {
//     const res = await fetch('https://api.example.com/data');
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.error("The error is :", error);
//   }
// }
// fetchData();

// const { rejects } = require('assert');
// // 2. Reading file in node js 

// const fs = require('fs');

// async function readFile() {
//   try {
//     const data = await fs.readFileSync('./file.txt', 'utf8');
//     console.log(data);
//   } catch (error) {
//     console.error("The error is :", error)
//   }
// }

// readFile();

// // 3. Chaining Asynchronous opration 

// async function processDataFlow() {
//   try {
//     const responce = await fetch('https://api.example.com/user');
//     const processData = await responce.json();
//     console.log(processData)
//   } catch (error) {
//     console.error("Error to data process", error)
//   }
// }
// // processDataFlow().then(() => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve("This is a resolved promise");
// //     }, 5000)
// //   })
// // }).then(data => console.log(data)).catch(err => console.log(err))

// // 4. Image preloading 

// async function loadImage(url) {
//   return new Promise((resolve, reject) => {
//     const image = new Image();
//     image.onload = () => {
//       return resolve(image);
//     }
//     image.onerror = () => {
//       return reject(new Error(`Cannot load image`));
//     }
//     // image.src = "not-existing-image.jpg"
//     // image.src = "https://images.pexels.com/photos/167692/pexels-photo-167692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h"
//     image.src = "url"
//   })
// }
// async function useImage() {
//   try {
//     const image = await loadImage(url);
//     document.body.appendChild(image);
//   } catch (error) {
//     console.error(error);
//   }
// }


// //5. Database Opration in Node.Js

// const { Pool } = require('./db')
// const pool = new Pool();
// async function queryDataBase() {
//   try {
//     const res = await pool.query('SELECT * FROM users');
//     console.log(res.rows[0].email);
//   }
//   // finally {
//   //   pool.end()
//   // }
//   catch (error) {
//     console.log(error);
//   }
// };

// //6. using async with setTimeout

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value");
//     }, ms)
//   });
// }

// async function main() {
//   var value = await delay(2000);
//   console.log(value);
// }
// main();


//JavaScript quiz
// console.log('2' >= 2)

// console.log('This is a string.', instanceof String);

// function doSomethings() {
//   return
//   {
//     success: true
//   };
// }
// console.log(doSomethings());






// //javaScript Question fir interview

// // 1. Reverse a string

// function reverseString(str) {
//   //empty string

//   let newString = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }
// const result = reverseString("Hello World!");
// const result1 = reverseString("Deepak");
// console.log(result);
// console.log(result1)



// //2. Check palindrom


// function checkPalindrom(str) {
//   let newString = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   if (newString === str) {
//     // console.log(true);
//     return 'Yes';
//   } else {
//     // console.log(false);
//     return 'No';
//   }
// }
// const palindromResult = checkPalindrom('radar');
// const notpalindromResult = checkPalindrom('hello');
// console.log(`Is radar a palindrome? ${palindromResult}`);
// console.log(`Is hello a palindrome? ${notpalindromResult}`);




// //3. Convvert the first letter of a string into upparcase



// function capitalizeFirstLetter(str) {
//   const capilalized = str.charAt(0).toUpperCase() + str.slice(1);
//   return capilalized;
// }
// const capitalizedStr = capitalizeFirstLetter('deepak');
// console.log(`Capitalized deepak is: ${capitalizedStr}`);




// //4. Remove Duplicate from array



// function getUnique(arr) {
//   let uniqueArr = [];
//   for (let i in arr) {
//     if (uniqueArr.indexOf(arr[i]) == -1) {
//       uniqueArr.push(arr[i]);
//     }
//   }
//   // console.log(uniqueArr);
//   return uniqueArr;
// }
// const array = [1, 2, 3, 3, 4];
// console.log(getUnique(array));




// //5. Create Two Dimensional Array



// function twoDimentionalArray(a, b) {
//   let arr = [];
//   for (let i = 0; i < a; i++) {
//     for (let j = 0; j < b; j++) {
//       arr[i] = arr[i] || [];
//       arr[i].push(i + ',' + j);
//     }
//   }
//   return arr;
// }

// const x = 2;
// const y = 3;
// const twoDArray = twoDimentionalArray(x, y);
// console.log("Two Dimentional Array:\n", twoDArray);


// // 6. Repalce all occurrence of string using built-in method

// const string = 'Mr red has a red house and a red car';
// const res = string.split('red').join('blue');
// console.log(res)


// //7. Checking the type of variable in JavaScript


// function checkType(val){
//     switch(typeof val){
//         case "string":
//             console.log("This is String");
//             break;
//         case "number":
//             console.log("This is Number");
//             break;
//         case "boolean":
//             console.log("This is Boolean");
//             break;
//         case "object":
//             if(Array.isArray(val))
//                 console.log("This is an Array")
//             else
//                 console.log("This is an Object")
//             break;
//         default:
//             console.log("Unknown Type")
//     }
// }
// checkType("Hello World")
// checkType(101)
// checkType(true)
// checkType([1,2,3])
// checkType("sjakhduiwq8378469hkdaf24sa")



// function doSomethings() {
//   return {
//     success: true
//   };
// }
// console.log(doSomethings());




// In JavaScript, when we assign a 'variable' to another variable (strB = strA), it doesn't create a new copy of the data; instead, it creates a new reference to the same data. So when we change strB, strA remains unchanged. That's why strA still holds "Hii" even after changing strB to "bye".



// let strA = "Hii";
// let strB = strA;
// strB = "bye";
// console.log(`Value of A : ${strA}`);  
// console.log(`Value of B : ${strB}`);  


// let a = 10;
// let b = a;
// b = 188;
// console.log(a)

// let objA = { prop1: 42 };
// let objB = objA;
// objB.prop1 = 90;
// console.log(objA);

// var x=10;
// function baby(){
//   console.log(x);
//   var x=20;
// }
// baby();
// console.log(x);

// let a=3-'4';
// console.log(typeof a,a);


// let strA = [0, 1, 2];
// let strB = strA;
// strB[0] = 42;
// console.log(strA);



// //JavaScript Quiz
// let a = [1, 2, 3];
// let b = a;
// b.push(4);
// console.log(a === b);



// console.log('banana' > 'Banana');

// let value = '';
// if (value) {
//   console.log('Truthy');
// } else {
//   console.log('falsy')
// }

// console.log([] == ![]);


// console.log(true + true);

// console.log({} + []);

// console.log('' === '0');
// console.log(0 === '');
// console.log(0 === '0');

// if ("falsy") {
//   console.log("True");
// } else {
//   console.log('False');

// }


// let obj = { lang: 'React' };
// const lib = {};
// lib.name = obj;
// obj = null;
// console.log(lib.name.lang); // React
// console.log(lib.name)


// let a = 3 + 2 + "5";
// console.log(typeof a, a);
// console.log(3 + 2 + "5")

// //JavaScript Quiz


// let x;
// console.log(x);                    // undefined

// let a = 10;
// let b = 20;
// console.log("Total = " + a + b);       // Total = 1020

// let x=10.5;
// let y=parseInt(x);
// // let z=parseFloat(x).toFixed(2);
// console.log(y);               // 10
// // console.log(z);              // 10.50

// function one() {
//   return "hello";
// }
// function two() {
//   return "baby";
// }
// let result = one() + two();
// console.log(result);             // hello baby



// console.log((function(){
//   return [this];
// })());


// function seyHii() {
//   console.log(name);
//   console.log(age);
//   var name = "Deepak";
//   let age = 32;
// }
// seyHii();

// console.log(2 == '2');


// let obj = {
//   a: 'one',
//   b: 'two',
//   a: 'three'
// }
// console.log(obj)                     //{a: "three", b: "two"}


// let baby = {
//   name: "senorita",
// };
// Object.freeze(baby);
// baby.makeup = true;
// console.log(baby);

/*

This code defines an object named "baby" with a property "name" set to "senorita". Then, it freezes the object using Object.freeze(), making it immutable. When trying to add a new property "makeup" to the frozen object, it does not throw an error but doesn't add the property either, as the object is already frozen. Finally, it logs the "baby" object, which only contains the "name" property.

*/


// const myName="Deepak";
// if(myName==='Deepak'){
//   myName='John';
// }
// console.log(`My Name is ${myName}`)




// let obj1 = {
//   a: "Deepak",
//   b: "utsav",
//   c: {
//     d: 'Sonu'
//   }
// }

// let obj2=obj1;

// obj2.a="Rahul";
// console.log(obj1)


// let obj2 = obj1;
// obj2.a='Rahul';
// console.log(obj1);
// console.log(obj2);

// console.log(null == 0)

// console.log('1' - -'1');
// //2
// console.log('1' + +'1');
// //11
// console.log('1' + -'1');
// //0


// console.log(['10', '10', '10'].map(parseInt));



//Promise api and interview question..


const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000)
})


const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success");
    // reject("P2 Failed");
  }, 1000)
})


const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success");
    // reject("P3 Failed");
  }, 2000)
})




// Promise.all([p1, p2, p3]).then((res) => {
//   console.log(res)
// }).catch((error) => {
//   console.error(error);
// })



// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.error(err)
//   })




Promise.race([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })

