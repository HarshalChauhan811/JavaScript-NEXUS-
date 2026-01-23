// ⬛⬛⬛⬛⬛⬛ 📘 LECTURE 13 — CONTROL FLOW + SCOPE + HOISTING ⬛⬛⬛⬛⬛⬛
// 🎯 Part-2: Scope (var / let / const) + Hoisting


// =========================================
// 🔹 1️⃣ SCOPE KYA HOTA HAI?
// =========================================

// Scope = variable kahan accessible hai
// JS me mainly 3 scope hote hain:
// 🌍 Global Scope
// 🧑‍💻 Function Scope
// 🧱 Block Scope


// =========================================
// 🌍 2️⃣ GLOBAL SCOPE
// =========================================

// Global variable poore program me accessible hota hai

let a = 10;
var b = 20;
const c = 30;

function showGlobal() {
    console.log(a, b, c);
}

showGlobal();
// Output: 10 20 30


// =========================================
// 🧑‍💻 3️⃣ FUNCTION SCOPE
// =========================================

// Function ke andar banne wale variables
// function ke bahar access nahi hote

function greet() {
    let a = 10;
    var b = 20;
    const c = 30;

    console.log("👋 Hello Function");
    console.log(a, b, c);
}

greet();
// Output:
// Hello Function
// 10 20 30

// console.log(a); ❌ ERROR
// console.log(b); ❌ ERROR
// console.log(c); ❌ ERROR


// =========================================
// 🧱 4️⃣ BLOCK SCOPE (let & const)
// =========================================

// Block = { } (if, for, while)

if (true) {
    let x = 10;
    const y = 20;
    var z = 30;
}

// console.log(x); ❌ ERROR
// console.log(y); ❌ ERROR
console.log(z);
// Output: 30

// 🧠 let & const → block scoped
// 🧠 var → block scope follow nahi karta


// =========================================
// ⚠️ 5️⃣ VAR PROBLEMS
// =========================================

// var redeclare + overwrite allow karta hai

var amount = 400;
var amount = 20;
var amount = 10;

console.log(amount);
// Output: 10

// ⚠️ Isi wajah se var avoid karte hain


// =========================================
// ✅ 6️⃣ LET vs CONST
// =========================================

// let → reassign allowed
let money = 100;
money = 200;
console.log(money);
// Output: 200

// const → reassign NOT allowed
const price = 300;
// price = 400; ❌ ERROR


// =========================================
// 🔁 7️⃣ BLOCK SHADOWING
// =========================================

// Same variable name, different scope

let value = 20;

if (true) {
    let value = 30;
    console.log(value);
    // Output: 30 (block wala)
}

console.log(value);
// Output: 20 (global wala)


// =========================================
// 🔄 8️⃣ LOOP SCOPE
// =========================================

for (let i = 0; i < 3; i++) {
    console.log(i);
}
// Output: 0 1 2

// console.log(i); ❌ ERROR
// let block scoped hota hai


// =========================================
// 🔥 9️⃣ HOISTING (IMPORTANT)
// =========================================

// Hoisting = JS declaration ko
// execution se pehle upar le jaata hai


// =========================================
// ✅ FUNCTION DECLARATION (HOISTED)
// =========================================

sayHello();

function sayHello() {
    console.log("✅ Hello from function declaration");
}
// Output: Hello from function declaration


// =========================================
// ❌ FUNCTION EXPRESSION (NOT HOISTED)
// =========================================

// meet(); ❌ ERROR (cannot access before initialization)

const meet = function () {
    console.log("❌ Hello from function expression");
};

meet();
// Output: Hello from function expression


// =========================================
// ⚠️ VAR HOISTING
// =========================================

console.log(x); // undefined
var x = 10;

// JS internally:
// var x;
// console.log(x);
// x = 10;


// =========================================
// ⛔ LET & CONST HOISTING (TDZ)
// =========================================

// console.log(y); ❌ ERROR
let y = 20;

// console.log(z); ❌ ERROR
const z2 = 30;

// 🧠 let & const hoist hote hain
// but Temporal Dead Zone (TDZ) me hote hain


// =========================================
// 🔹 🔟 FINAL RULES (LECTURE 13 SUMMARY)
// =========================================

// ✅ Global scope → sab jagah
// ✅ Function scope → function ke andar
// ✅ Block scope → let & const
// ❌ var → block scope nahi
// ✅ Function declaration → hoisted
// ❌ Function expression → not hoisted
// ❌ let/const before use → TDZ error
