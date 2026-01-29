// ===============================
// let vs var vs const (HOISTING + UNDEFINED)
// ===============================

// 🔹 var variable
// var hoist hota hai aur default value = undefined mil jaati hai
var x = undefined;

// 🔹 let variable
// let bhi hoist hota hai
// BUT Temporal Dead Zone (TDZ) me rehta hai
let y;

// 🔹 let variable without initialization
let z;

// 🔹 const variable (commented)
// const a;  ❌ ERROR
// const ko declaration ke time value deni hi padti hai


// ===============================
// ACCESS BEFORE ASSIGNMENT
// ===============================

// var ka default value undefined hota hai
console.log(x);
// Output: undefined

// let y ko yahan access karoge to ❌ ERROR
// console.log(y);
// ❌ Cannot access 'y' before initialization


// ===============================
// ASSIGNING VALUES
// ===============================

z = 50;   // let variable assign
x = 10;   // var variable reassign
y = 20;   // let variable assign

// const a = 20;  // const ko sirf ek baar assign kar sakte hain


// ===============================
// ACCESS AFTER ASSIGNMENT
// ===============================

console.log(z);
// Output: 50

console.log(x);
// Output: 10

console.log(y);
// Output: 20


// ===============================
// SUMMARY (DIMAG ME BAITHA LO)
// ===============================
//
// var:
// ✔ hoisted
// ✔ default = undefined
// ✔ redeclare allowed
//
// let:
// ✔ hoisted
// ❌ TDZ me hota hai
// ❌ access before assign error
//
// const:
// ✔ hoisted
// ❌ TDZ
// ❌ declaration ke saath value mandatory
// ❌ reassign nahi hota
