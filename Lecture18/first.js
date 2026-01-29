// ===============================
// GLOBAL OBJECT + STRICT MODE
// ===============================
//
// Global object wo hota hai
// jisme JS ke inbuilt features rehte hain
//
// Browser  → window
// NodeJS   → global
// Universal → globalThis (recommended)


// ===============================
// GLOBAL OBJECT EXAMPLES
// ===============================

console.log("Hello World");        // global function
console.log(Math.random());        // Math global object

// Same cheez globalThis ke through
console.log(globalThis.Math.random());

// 🧠 Matlab:
// Math, console, setTimeout, Object
// sab global object ka part hote hain


// ===============================
// STRICT MODE
// ===============================
//
// "use strict" JS ko strict bana deta hai
// galtiyon ko ignore nahi karta

"use strict";


// ===============================
// WITHOUT STRICT MODE (example)
// ===============================
//
// a = 10;           // ❌ implicit global ban jaata
// console.log(a);   // works in non-strict


// ===============================
// WITH STRICT MODE
// ===============================
//
// a = 10;           // ❌ ReferenceError
// console.log(a);

// 🧠 Strict mode force karta hai:
// variable declare karo (let/var/const)


// ===============================
// OBJECT.FREEZE()
// ===============================
//
// freeze ka matlab:
// ❌ add nahi kar sakte
// ❌ delete nahi kar sakte
// ❌ modify nahi kar sakte

let obj = {
    name: 10
};

// object ko freeze kar diya
Object.freeze(obj);

// modify karne ki koshish
obj.name = 30;   // ❌ ignore ho jaayega (strict mode me error bhi aa sakta hai)

console.log(obj);

// Output:
// { name: 10 }


// ===============================
// FREEZE vs NORMAL OBJECT
// ===============================
//
// Normal object:
// ✔ modify allowed
//
// Freeze object:
// ❌ modify
// ❌ add
// ❌ delete


// ===============================
// IMPORTANT INTERVIEW POINTS
// ===============================
//
// ✅ globalThis → universal global object
// ✅ strict mode → bugs prevent karta hai
// ✅ implicit global ❌
// ✅ Object.freeze() → full lock
