// ===============================
// FUNCTION HOISTING & EXECUTION
// ===============================


// ===============================
// 🔹 FUNCTION DECLARATION (HOISTED)
// ===============================

// greet();   // ✅ ye kaam karega 

/*
function greet(){
    console.log("Hello World");
}
*/

// 🧠 Memory Allocation Phase:
// greet → pura function memory me store ho jaata hai
//
// Code Execution Phase:
// greet() call hone par function execute hota hai
//
// Output:
// Hello World



// ===============================
// 🔹 FUNCTION EXPRESSION (NOT HOISTED)
// ===============================

// var meet = function(){ ... }
//
// Memory allocation phase me:
// meet → undefined
//
// function body assign execution phase me hota hai

var meet = function(){
    console.log("Hello Meet");
};

meet();

// Output:
// Hello Meet


// ❌ Agar upar meet() call kar dete to:
// TypeError: meet is not a function
// kyunki us time meet = undefined hota


// ===============================
// 🔹 VARIABLE HOISTING (var)
// ===============================

var x;

// Memory Allocation Phase:
// x → undefined

console.log(x);
// Output:
// undefined

x = 10;

// Code Execution Phase:
// x ko value assign hoti hai

console.log(x);
// Output:
// 10


// ===============================
// 🔹 COMPLETE FLOW (DIMAG ME BAITHANE KE LIYE)
// ===============================
//
// MEMORY ALLOCATION PHASE:
// greet → function (agar declaration hota)
// meet  → undefined
// x     → undefined
//
// EXECUTION PHASE:
// meet = function(){...}
// meet() → Hello Meet
// console.log(x) → undefined
// x = 10
// console.log(x) → 10


// ===============================
// 🔹 FINAL RULES (INTERVIEW GOLD)
// ===============================
//
// ✅ Function Declaration → fully hoisted
// ❌ Function Expression → hoisted as undefined
// ✅ var → hoisted with undefined
// ❌ let / const → TDZ (error before use)
