// ⬛⬛⬛⬛⬛⬛ LECTURE 11 — OBJECTS IN JAVASCRIPT (PART-2) ⬛⬛⬛⬛⬛⬛
//
// Focus Topics:
// 1️⃣ Object Destructuring
// 2️⃣ Array Destructuring
// 3️⃣ Nested Destructuring
// 4️⃣ Prototype Chaining (VERY IMPORTANT)


// ==================================================
// 1️⃣ OBJECT DESTRUCTURING
// ==================================================
//
// Destructuring = object ke andar ki properties
// ko direct variables me nikal lena
// 👉 Code short + readable ban jaata hai

let obj = {
  name: "Sourav",
  money: 420,
  balance: 30,
  age: 20,
  aadhaar: "74729826543"
};

// ❌ Normal access (old way)
let n = obj.name;
console.log(n);
// Output: Sourav


// ✅ Object Destructuring (modern way)
const { name, balance, age } = obj;
console.log(name, balance, age);
// Output: Sourav 30 20


// ==================================================
// 1️⃣.1️⃣ ASSIGNING NEW VARIABLE NAMES
// ==================================================
//
// Agar variable ka naam change karna ho

const { name: fullname, age: years } = obj;
console.log(fullname, years);
// Output: Sourav 20

// ⚠️ Ab "name" aur "age" directly use nahi kar sakte
// Kyunki unka naam badal chuka hai


// ==================================================
// 1️⃣.2️⃣ REST OPERATOR IN OBJECT DESTRUCTURING
// ==================================================
//
// Jo properties destructure nahi hoti
// wo ...rest operator ke through ek naya object ban jaati hain

const { name: userName, age: userAge, ...obj1 } = obj;

console.log(userName, userAge);
// Output: Sourav 20

console.log(obj1);
// Output: { money: 420, balance: 30, aadhaar: '74729826543' }

// 🧠 Important:
// Destructuring COPY karta hai
// Original object se properties delete nahi hoti


// ==================================================
// 2️⃣ ARRAY DESTRUCTURING
// ==================================================
//
// Same concept arrays ke liye bhi apply hota hai

const arr = [3, 2, 1, 5, 10];

// Basic destructuring
const [first, second] = arr;
console.log(first, second);
// Output: 3 2

// Skip elements using empty space
const [a, b, , c] = arr;
console.log(a, b, c);
// Output: 3 2 5

// Rest operator in array
const [x, y, ...rest] = arr;
console.log(x, y);
// Output: 3 2

console.log(rest);
// Output: [1, 5, 10]


// ==================================================
// 3️⃣ NESTED OBJECT DESTRUCTURING
// ==================================================
//
// Object ke andar object ho → usko bhi destructure kar sakte hain

let user = {
  name: "Harshal",
  age: 20,
  aadhaar: "45863072",
  address: {
    pincode: 802113,
    city: "Varanasi",
    state: "UP"
  }
};

// Nested destructuring
const { address: { city, pincode } } = user;
console.log(city, pincode);
// Output: Varanasi 802113


// ==================================================
// 3️⃣.1️⃣ ARRAY INSIDE OBJECT DESTRUCTURING
// ==================================================

let objArr = {
  arr: [90, 40, 60, 80]
};

// obj ke andar ki arr property → uska first element
const { arr: [firstElement] } = objArr;

console.log(firstElement);
// Output: 90

// 🧠 Breakdown:
// arr: → object ke andar ki arr property
// [firstElement] → array ka pehla element


// ==================================================
// 4️⃣ PROTOTYPE CHAINING (VERY IMPORTANT)
// ==================================================
//
// Prototype chaining = JS ka inheritance mechanism
// Isi wajah se humein built-in methods milte hain
// jaise toString(), push(), pop(), etc.

let protoObj = {
  name: "Harshal",
  amount: 420,
  greet: function () {
    return 10;
  }
};

// Humne toString() define nahi kiya
// Phir bhi use kar pa rahe hain
console.log(protoObj.toString());
// Output: [object Object]

// Reason:
// protoObj → Object.prototype se inherit karta hai


// ==================================================
// 4️⃣.1️⃣ PROTOTYPE CHAIN FLOW
// ==================================================
//
// Har object ke paas ek hidden property hoti hai → __proto__
//
// Agar property object me nahi milti:
// JS prototype me search karta hai
// Ye chain form me chalta hai → prototype chaining


// ==================================================
// 4️⃣.2️⃣ OBJECT LINKING (MANUAL PROTOTYPE)
// ==================================================

let user1 = { name: "Harsh", age: 20 };
let user2 = { amount: 150, money: 20 };

// user2 ka prototype = user1
user2.__proto__ = user1;

console.log(user2.name);
// Output: Harsh

// 🧠 Explanation:
// user2 ke paas name nahi mila
// JS ne user2.__proto__ (user1) me search kiya
// Waha name mil gaya


// ==================================================
// 4️⃣.3️⃣ PROTOTYPE CHAIN IN ARRAYS
// ==================================================

let arr2 = [10, 20, 30];

console.log(arr2.__proto__ === Array.prototype);
// Output: true

console.log(arr2.__proto__.__proto__ === Object.prototype);
// Output: true

console.log(Object.prototype.__proto__ === null);
// Output: true


// ==================================================
// 📊 PROTOTYPE CHAIN DIAGRAM (LOGIC)
// ==================================================
//
// null
//  ↑
// Object.prototype  → toString(), valueOf()
//  ↑
// Array.prototype   → push(), pop(), includes()
//  ↑
// arr2 = [10,20,30]


// ==================================================
// ✅ INTERVIEW GOLDEN POINTS
// ==================================================
//
// ✔️ Har object ke sath Object.prototype attach hota hai
// ✔️ Har array ke sath Array.prototype attach hota hai
// ✔️ Array.prototype khud Object.prototype se inherit karta hai
// ✔️ Isi wajah se typeof array === "object"
// ✔️ Prototype chaining se methods reuse hote hain


// ==================================================
// 📌 FINAL SUMMARY — LECTURE 11
// ==================================================
//
// ✅ Destructuring → object/array se direct values nikalna
// ✅ Rest operator → bachi hui properties ka object/array
// ✅ Nested destructuring → object ke andar object/array
// ✅ Prototype chaining → inheritance via __proto__
// ✅ Built-in methods → prototype se aate hain
// ✅ Prototype chain ka end → null
