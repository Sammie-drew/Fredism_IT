let userColor = "undefined";
// let defaultColor = "Blue";
// let currentColor = userColor || defaultColor;
// console.log(currentColor);

//BitWise operators
// console.log(1 & 2);
// console.log(1 | 2);

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 5;

// let myPermission = 0;
// myPermission = myPermission | readPermission | writePermission;
// console.log(myPermission);

// let a = "red";
// let b = "blue";
// let c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);

// conditional statement

// switch

// let role = "guest";

// switch (role) {
//   case "guest":
//     console.log("guese statement ");
//     break;
//   case "Moderated":
//     console.log("moderator");
//     break;

//   default:
//     console.log("unknown user");
// }

// for Loop

// let slogan = "Reaching heights";

// for (let index = 0; index < 5; index++) {
//   console.log(slogan);
// }

// while

// let i = 9;
// while (i <= 7) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i < 2);

// for in

//objects
// const Person = {
//   name: "Drew",
//   age: 30,
// };
// for (let key in Person) console.log(key, Person[key]);

//Arrays

// const colors = ["Blue", "green", "brown"];

// for (let index in colors) console.log(index, colors[index]);

//for of

// good to interate over an array

// for (const color of colors) {
//   console.log(color);
// }

//exercise 1
// function max(num1, num2) {
//   return num1 > num1 ? num1 : num2;
// }

// console.log(max(5, 6));

//exercise 2
// function isLandScape(width, height) {
//   return width > height ? "Landscape" : "portrait";
// }

// console.log(isLandScape(500, 300));

// exercise 3// fizzbuzz algo
// function FizzBuzz(input) {
//   if (typeof input !== "number") {
//     return "not a numebr";
//   }

//   if (input % 3 === 0 && input % 5 === 0) {
//     return "FIZZBUZZ";
//   }
//   if (input % 3 === 0) return "Fizz";

//   if (input % 5 === 0) return "Buzz";

//   return input;
// }

// console.log(FizzBuzz(15));

// exercise 4 // demerit points

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint) {
//     console.log("okay");
//   } else {
//     const Points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (Points >= 12) console.log("Lincense suspended");
//     else console.log("Points", Points);
//   }
// }

// checkSpeed(93);

// function showNumbers(Limit) {
//   for (let i = 0; i <= Limit; i++) {
//     const message = i % 2 === 0 ? "Even" : "Odd";
//     console.log(i, message);
//   }
// }

// showNumbers(10);

// exercise 5 count truthy
// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) if (value) count++;
//   return count;
// }

// function showProperties(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       console.log(key, obj[key]);
//     }
//   }
// }

// const todos = {
//   todo: "Get laid",
//   gp: 4.4,
//   birthday: 26,
//   placement: "NOne",
// };

// showProperties(todos);

// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

//   return sum;
// }

// console.log(sum(10));

// function calculateGrade(marks) {
//   const average = calculateAverage(marks);
//   if (average < 60) return "F";
//   if (average < 70) return "D";
//   if (average < 80) return "C";
//   if (average < 90) return "B";
//   return "A";
// }

// function calculateAverage(array) {
//   sum = 0;
//   for (const value of array) {
//     sum += value;
//   }
//   return sum / array.length;
// }
// const array = [80, 80, 50];
// console.log(calculateGrade(array));

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) pattern += "*";
//     console.log(pattern);
//   }
// }

// showStars(10);

// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++)
//     if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++) {
//     if (number % factor === 0) return false;
//   }
//   return true;
// }

// showPrimes(10);

//OBJECTS

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log("Happy boy");
//   },
// };

// circle.draw();

//Factory functions

// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("I ain't draw shit");
//     },
//   };
// }

// const circle1 = createCircle(3);
// console.log(circle1.draw());

// constructor functions
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("Draw");
//   };
// }

// const circle = new Circle(1);
// circle.draw();

// const circle = {
//   radius: 1,
// };
// console.log(circle);

// circle.color = "Green";
// console.log(circle);

// circle.draw = function () {
//   console.log("draw");
// };
// console.log(circle);

// to delete an instance of an object u use the delete keyword
// delete circle.radius;
// delete circle.color;
// console.log(circle);

// cloning an object

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("I am drawing");
//   },
// };

//old method
// const another = {};

// for (let key in circle) another[key] = circle[key];

// console.log(another["radius"]);

//another metthod

// const another = Object.assign({ hatred: 1 }, circle);

// console.log(another);

//another one
// const another = { ...circle, beamer: "rema" };
// console.log(another);

// Template literals
// const name = "Sammie";
// const another = `
// This is my ${name}
// first "message"
// `;
// console.log(another);

// date object

// const date1 = new Date();
// console.log(date1);
// date1.setFullYear(2017);
// console.log(date1);

//Exercise 1. Address object

// const address = {
//   street: "Andrew",
//   city: "Lagos",
//   zipCode: 100001,
// };

// function showAddress(address) {
//   for (let key in address) {
//     console.log(key, address[key]);
//   }
// }

// factory function

// function createAddress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode,
//   };
// }
// const newObj = createAddress("Andrew", "lagos", 10001);
// console.log(newObj);

//constructor function

// function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

// const address1 = new Address("Andrew", "lagos", 10001);
// const address2 = new Address("Andrew", "lagos", 10001);

// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
//   );
// }
// function areSame(address1, address2) {
//   return address1 === address2;
// }
// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));

//exercise 4 - Blog post objects

// const blogPost = {
//   title: "Sports",
//   body: "Lorem ipsum etc shit ",
//   author: "Sammie Dreew",
//   views: 10,
//   coments: [
//     {
//       author: "Baby_drew",
//       body: "u don fucked up",
//     },
//     {
//       author: "Drew",
//       body: "u  fucked up",
//     },
//   ],
//   isLive: false,
// };

// console.log(blogPost);

//Exercise 5 .. constructor function based on the blogpost object

// function Post(title, body, author) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.views = 0;
//   this.comments = [];
//   this.isLive = false;
// }

// const post = new Post("BBall", "Giannis is the goat", "Sammie drew");
// console.log(post);

// const priceRange = [
//   {
//     label: "$",
//     tooltip: "Inexpensive",
//     minPerPerson: 0,
//     maxPerPerson: 10,
//   },
//   {
//     label: "$$",
//     tooltip: "Moderate",
//     minPerPerson: 11,
//     maxPerPerson: 20,
//   },
//   {
//     label: "$$$",
//     tooltip: "Expensive",
//     minPerPerson: 21,
//     maxPerPerson: 50,
//   },
// ];

// let restaurants = [
//   {
//     averagePerPerson: 5,
//   },
// ];

//Arrays :

// const numbers = [3, 4];

// numbers.push(5, 6);

// numbers.unshift(7, 9);

// console.log(numbers);

// numbers.splice(2, 2, "a", "f");
// console.log(numbers);

// const numbers = [1, 2, 3, 4];
// console.log(numbers.lastIndexOf("s"));

// to find primitive elements

// console.log(numbers.includes(1));

// find reference type array

// const courses = [
//   {
//     id: 1,
//     name: "a",
//   },
//   {
//     id: 2,
//     name: "b",
//   },
//   {
//     id: 3,
//     name: "c",
//   },
// ];

// const course = courses.findIndex((course) => course.name === "-a");

// console.log(course);

// delete method to delete from an array
// const numbers = [1, 2, 3, 4, 5, 6];

// const last = numbers.pop();

// console.log(last);

// const first = numbers.shift();
// console.log(first);

// const mid = numbers.splice(0, 2);
// console.log(mid);
// console.log(numbers);

//emptying an array

// let numbers = ["H", "a", "p", "p", "y"];
// let another = numbers;

//solution 1
// numbers = []

// solution 2
// numbers.length = 0

// Solution 3
// numbers.splice(0, numbers.length);
// console.log(numbers);

//Soultion 4
// numbers.pop();

// console.log(numbers);

// combining and slicing arrays

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);

// const slice = combined.slice(2, 4);

// console.log(combined);
// console.log(slice);

// const first = [1, 2, 3, 4, 5];
// const second = [6, 7, 8, 9];

// const combined = [...first, "fuck", ...second, 10, 11, 12];

// console.log(combined);

// iterate an array

// const number = [1, 2, 3, 4];

//way 1:
// for (const num of number) {
//   console.log(num);
// }

// number.forEach((number, index) => console.log(index, number));

// Joining an Array

// const numbers = [1, 3, 5];

// const joined = numbers.join(".");
// console.log(joined);

// const message = "This is my first message";
// const parts = message.split(" ");
// console.log(parts);

// const combined = parts.join("-");

// console.log(combined);

// sorting arrays
// const numbers = [3, 1, 5, 7, 2];
// numbers.sort();
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// const courses = [
//   {
//     id: 1,
//     name: "node.js",
//   },
//   {
//     id: 2,
//     name: "JavaScript",
//   },
// ];

// const sorted = courses.sort((a, b) => {
//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
//   return 0;
// });

// console.log(sorted);

//Testing elements of an array

// const numbers = [1, -1, 2, 3, 4, 5];

// const allPositives = numbers.every((value) => value >= 0);
// console.log(allPositives);

// const atleastOnePositives = numbers.some((value) => value >= 0);
// console.log(atleastOnePositives);

//Filtering an array
// const numbers = [1, -1, 2, -2, 3, -3, 4];

// const filtered = numbers.filter((value) => value >= 0);
// console.log(filtered);

//mapping an array

// const items = filtered.map((n) => "<li>" + n + "</li>");
// console.log(items);

// const items = filtered.map((n) => ({ value: n }));
// console.log(items);

//u can chain them since they dont modify the initial arrays

// const chainer = numbers.filter((n) => n >= 0).map((n) => ({ value: n }));
// console.log(chainer);

// function addNum() {
//   let sum = 0;
//   for (number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// console.log(addNum(numbers));

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);

// function arrayFromRange(min, max) {
//   const output = [];
//   for (i = min; i <= max; i++) output.push(i);
//   return output;
// }
// console.log(arrayFromRange(1, 10));

// const numbers = [1, 2, 3, 4];

// exercise 2
// console.log(Includes(numbers, 3));

// function Includes(array, searchElement) {
//   for (let element of array) {
//     if (element === searchElement) return true;
//     return true;
//   }
// }

//exercise 4 moving an element

// function move(array, index, offset) {
//   const position = index + offset;
//   if (position >= array.length) {
//     console.error("Invalid Offset");
//     return;
//   }
//   const output = [...array];
//   const element = output.splice(index, 1)[0];
//   output.splice(index + offset, 0, element);
//   return output;
// }

// exercise 5
// function countOccurences(array, searchElement) {
//   let sum = 0;
//   for (let element of array) if (element === searchElement) sum++;
//   return sum;
// }

// const count = countOccurences(numbers, 2);
// console.log(count);

// exercise 6

// function getMax(array) {
//   if (array.length === 0) return undefined;

//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) max = array[i];
//   }
//   return max;
// }

// const max = getMax(numbers);

// console.log(max);

// const movies = [
//   {
//     title: "a",
//     year: 2018,
//     rating: 4.5,
//   },
//   {
//     title: "b",
//     year: 2018,
//     rating: 4,
//   },
//   {
//     title: "c",
//     year: 2018,
//     rating: 4.3,
//   },
//   {
//     title: "d",
//     year: 2017,
//     rating: 4.0,
//   },
// ];

// const titles = movies
//   .filter((m) => m.year === 2018 && m.rating >= 4)
//   .sort((a, b) => a.rating - b.rating)
//   .reverse()
//   .map((m) => m.title);

// console.log(titles);

// FUNCTIONS

//Hoisting: is the process of  moving function declaration to the top of the file

// using the arguments object

// function sum() {
//   let total = 0;
//   for (let value of arguments) total += value;
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 10));

//Rest operator

// function sum(...args) {
//   return args.reduce((a, b) => a + b);
// }
// console.log(sum(1, 4, 6, 8));

// Default Parameter

// function interest(principal, rate = 50, time) {
//   return ((principal * rate) / 100) * time;
// }

// console.log(interest(40000, 100, 0.6));

// const person = {
//   firstName: "Sammie",
//   lastName: "Drew",
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     if (typeof value !== "string") throw new Error("Value is not a string.");

//     const parts = value.split(" ");
//     if (parts.length !== 2)
//       throw new Error("Enter a valid first and last name ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// try {
//   person.fullName = "";
// } catch (error) {
//   alert(error);
// }
// console.log(person);

//The this keyword

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach((tag) => console.log(this.title, tag));
//   },
// };

// video.showTags();

//Exercise 1

// function sum(...items) {
//   if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];

//   return items.reduce((a, b) => a + b);
// }

// console.log(sum([1, 2, 3, 4]));

//Exercise 2

// const circle = {
//   radius: 2,
//   get area() {
//     return Math.PI * this.radius * this.radius;
//   },
// };
// console.log(circle.area);

// Exercise 3

// const numbers = [1,2,3,4];

// function countOccurences(array,searchElement){

// }
