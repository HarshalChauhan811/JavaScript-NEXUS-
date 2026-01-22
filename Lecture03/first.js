// =====================================
// 📌 JavaScript Data Types Overview
// =====================================

// Primitive Data Types:
// Number, String, Boolean, Null, Undefined, BigInt, Symbol

// Non-Primitive (Reference) Data Types:
// Array, Object, Function


// ===============================
// 📌 Array (Non-Primitive)
// ===============================

// Array ek ordered collection hota hai
// Ek array me different data types store ho sakte hain

let arr = [10, 20, 50, "harshal", "mohit"];

// typeof array ka output "object" aata hai
console.log(typeof arr);
// Output: object  ⚠️ (Array internally object hi hota hai)


// ===============================
// 📌 Object (Non-Primitive)
// ===============================

// Object key : value pairs me data store karta hai

let obj = {
   user_name: "Harshal",
   account_number: 31242314213,
   balance: 420
};

console.log(obj);
// Output:
// { user_name: 'Harshal', account_number: 31242314213, balance: 420 }


// ===============================
// 📌 Function (Non-Primitive)
// ===============================

// Function ek reusable block of code hota hai

let fun = function () {
    console.log("Hello Coder Army");
    return 10;
};

// Function call hoga, pehle console.log chalega
// phir return value print hogi
console.log(fun());

// Output:
// Hello Coder Army
// 10


// =====================================
// 📌 Type Conversion (Type Casting)
// =====================================


// ===============================
// String → Number
// ===============================

let account_balance = "100";
let num = Number(account_balance);

console.log(typeof account_balance);
// Output: string

console.log(typeof num);
// Output: number


// ===============================
// Boolean → Number
// ===============================

// false → 0 , true → 1
let x = false;
console.log(Number(x));
// Output: 0


// ===============================
// Invalid String → Number
// ===============================

let account = "100xs";
let bal = "200s";

// Agar string pure number nahi hai
// to Number() NaN deta hai
console.log(Number(account));
// Output: NaN

console.log(Number(bal));
// Output: NaN


// ===============================
// null → Number
// ===============================

// null convert hota hai 0 me
let x1 = null;
console.log(Number(x1));
// Output: 0


// ===============================
// undefined → Number
// ===============================

// undefined convert hota hai NaN me
let x2;
console.log(Number(x2));
// Output: NaN


// ===============================
// Number → String
// ===============================

let ab = 20;
console.log(String(ab));
// Output: "20"


// ===============================
// Boolean → String
// ===============================

let ax = false;
console.log(String(ax));
// Output: "false"


// ===============================
// String → Boolean
// ===============================

// Empty string "" → false
// Space " " → true  ⚠️ (very important interview point)
let abc = " ";
console.log(Boolean(abc));
// Output: true


// =====================================
// 📌 Operators in JavaScript
// =====================================


// ===============================
// Arithmetic Expression
// ===============================

console.log((((6 * (3 + 18)) / 6) - 9));
// Step by step:
// (3+18)=21 → 6*21=126 → 126/6=21 → 21-9=12
// Output: 12


// ===============================
// Modulus Operator (%)
// ===============================

// % remainder deta hai
console.log(20 % 3);
// Output: 2


// ===============================
// Increment / Decrement
// ===============================

let sum = 20;

// Pre-increment: pehle value badhegi phir assign hogi
let total = ++sum;

console.log(total);
// Output: 21

console.log(sum);g
// Output: 21


// ===============================
// Assignment Operators
// ===============================

let x3 = 20;

// x3 += 10 → x3 = x3 + 10
x3 += 10;
console.log(x3);
// Output: 30

// x3 /= 10 → x3 = x3 / 10
x3 /= 10;
console.log(x3);
// Output: 3




// Ultra-Quick Revision (Interview Ready)

// Array ka typeof → "object"

// NaN → invalid number conversion

// null → 0, undefined → NaN

// " " (space string) → true

// ++sum → pre-increment

// % → remainder