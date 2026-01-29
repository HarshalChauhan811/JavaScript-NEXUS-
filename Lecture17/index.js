// ===============================
// HOISTING EXAMPLE (var vs let)
// ===============================

// JavaScript code execution 2 phase me hota hai:
// 1️⃣ Memory Creation Phase
// 2️⃣ Execution Phase


// ===============================
// MEMORY CREATION PHASE
// ===============================
//
// var x;        → memory allocate ho jaati hai (default: undefined)
// let y;        → memory allocate hoti hai BUT TDZ me hota hai
//
// Is phase me values assign nahi hoti


// ===============================
// EXECUTION PHASE
// ===============================

// var x already exists with value = undefined
console.log(x);
// Output: undefined

// let y TDZ me hai → access karna ❌ error
console.log(y);
// ❌ ReferenceError: Cannot access 'y' before initialization

var x = 10;   // yahan x ko value milti hai
let y = 20;   // yahan y TDZ se bahar aata hai

// Agar upar error na hota to aage code chalta


// ===============================
// FINAL OUTPUT (REALITY)
// ===============================
//
// undefined
// ❌ ReferenceError (code yahin ruk jaata hai)


// ===============================
// SHORT SUMMARY
// ===============================
//
// var:
// ✔ hoisted
// ✔ default = undefined
//
// let:
// ✔ hoisted
// ❌ TDZ me hota hai
// ❌ use before initialization error
