// Objects
let user1 = {
    name: "Rohit",
    age: 20
};

let user2 = {
    amount: 20,
    money: 50
};

// Prototype link set kiya
// Agar user2 me koi property nahi milegi
// to JavaScript user1 me search karega
user2.__proto__ = user1;

// user2 ke paas name nahi hai
// JS prototype chain follow karega → user1
console.log(user2.name);
// Output: Rohit


// Array example
let arr = [10, 20, 30, 40];

// arr ka prototype Array.prototype hota hai
console.log(arr.__proto__ == Array.prototype);
// Output: true

// Array.prototype ka prototype Object.prototype hota hai
console.log(arr.__proto__.__proto__ == Object.prototype);
// Output: true

// Object.prototype ke upar kuch nahi hota
// isliye next prototype null hota hai
console.log(arr.__proto__.__proto__.__proto__ == null);
// Output: true


// Prototype chain flow (dimag me picture banao)
// arr
//  ↑
// Array.prototype  → push(), pop(), map(), filter()
//  ↑
// Object.prototype → toString(), valueOf()
//  ↑
// null
