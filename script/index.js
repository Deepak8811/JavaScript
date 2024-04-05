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