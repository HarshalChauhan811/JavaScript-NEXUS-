// =====================================
// 📌 JavaScript Primitive Data Types
// =====================================

// JavaScript me total 7 primitive data types hote hain:
// 1️⃣ Number
// 2️⃣ String
// 3️⃣ Boolean
// 4️⃣ Null
// 5️⃣ Undefined
// 6️⃣ Symbol
// 7️⃣ BigInt


// ===============================
// 1️⃣ Number Data Type
// ===============================

// Number ka use numeric values store karne ke liye hota hai
let account_balance = 30;

console.log(account_balance);
// Output: 30


// ===============================
// 2️⃣ String Data Type
// ===============================

// String ka matlab hota hai text
// String hamesha single (' ') ya double (" ") quotes me likhi jaati hai

let str = "harshal chauhan is a bad boy, he doesn't know how to use zoom";
console.log(str);
// Output: harshal chauhan is a bad boy, he doesn't know how to use zoom

let comment = 'Hello doston';
console.log(comment);
// Output: Hello doston


// ===============================
// 3️⃣ Boolean Data Type
// ===============================

// Boolean sirf 2 values leta hai → true ya false
let Papa_ko_block_kara_hai = false;

console.log(Papa_ko_block_kara_hai);
// Output: false

console.log(typeof Papa_ko_block_kara_hai);
// Output: boolean


// ===============================
// 4️⃣ Undefined Data Type
// ===============================

// Variable declare hai lekin value assign nahi hui
let account;

console.log(account);
// Output: undefined


// ===============================
// 5️⃣ Null Data Type
// ===============================

// Null ka matlab: jaan-bujhkar empty value
let bal = null;

console.log(typeof bal);
// Output: object ❌ (JavaScript ka old bug)


// ===============================
// 6️⃣ Symbol Data Type
// ===============================

// Symbol hamesha unique hota hai
// Even agar description same ho, symbols equal nahi hote

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);
// Output: false

console.log(typeof id1);
// Output: symbol


// ===============================
// 7️⃣ BigInt Data Type
// ===============================

// Jab number Number.MAX_SAFE_INTEGER se bada ho
// tab BigInt ka use hota hai

let a = 4343147836124791823749832n;

console.log(a);
// Output: 4343147836124791823749832n


// ===============================
// 📌 JavaScript Number Limits
// ===============================

console.log(Number.MAX_SAFE_INTEGER);
// Output: 9007199254740991

console.log(Number.MIN_SAFE_INTEGER);
// Output: -9007199254740991



// Symbol → unique value (mostly object keys ke liye)

// id1 === id2 → false (even same description)

// typeof Symbol() → "symbol"

// typeof null → "object" ❗(JS bug)

// BigInt → large numbers ke liye (n lagana mandatory)