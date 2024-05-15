// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); //false
Object.is(0, -0); //false
Object.is(NaN, 100); //false
Object.is("one", "two"); //false
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); //false
Object.is(null, undefined); //flase

10 === 20; //false
10 === "10"; //false
3.14 !== 3.14; //false
"TechUp" !== "TechUp"; //false
NaN === NaN; //false
0 !== -0; //false

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; //flase

console.log(Object.is(10, 20));
console.log(Object.is(0, -0));
console.log(Object.is(NaN, 100));
console.log(Object.is("one", "two"));
console.log(Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }));
console.log(Object.is(null, undefined));

console.log(10 === 20);
console.log(10 === "10");
console.log(3.14 !== 3.14);
console.log("TechUp" !== "TechUp");
console.log(NaN === NaN);
console.log(0 !== -0);
console.log(objectA === objectB);
