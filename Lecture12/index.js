// ⬛⬛⬛⬛⬛⬛ 📘 LECTURE 12 — FUNCTIONS IN JAVASCRIPT ⬛⬛⬛⬛⬛⬛
// 🎯 Focus: function, return, arrow, rest/spread, objects, prototype


// =========================================
// 🔹 1️⃣ BASIC FUNCTION
// =========================================

// Function = reusable block of code
function greet() {
    console.log("👋 Hello Coder Army");
    console.log("😄 Mein badiya hu");
    console.log("🔥 Aur kya chal raha hai");
}

// Function call
greet();


// =========================================
// 🔹 2️⃣ FUNCTION WITH PARAMETERS
// =========================================

// Parameters → inputs
function sum(number1, number2) {
    console.log(number1 + number2);
}

// Arguments → actual values
sum(3, 4);      // 👉 7
sum(10, 15);    // 👉 25


// =========================================
// 🔹 3️⃣ FUNCTION WITH RETURN
// =========================================

// return → function ka output deta hai
function multiply(number1, number2) {
    return number1 * number2;
}

let result = multiply(4, 5);
console.log(result); // 👉 20


// =========================================
// 🔹 4️⃣ FUNCTION EXPRESSION
// =========================================

// Function ko variable me store kar sakte hain
const fun = function () {
    console.log("👋 Hello Coder Army");
    console.log("😎 Mein toh badiya hu");
    return "💰 Money";

    // return ke baad ka code execute nahi hota
};

console.log(fun());
// Output:
// Hello Coder Army
// Mein toh badiya hu
// 💰 Money


// =========================================
// 🔹 5️⃣ ARROW FUNCTION (MODERN WAY)
// =========================================

// Arrow function = short & clean syntax
const sumArrow = (a, b) => {
    return a + b;
};

// One-liner arrow function (implicit return)
const sumArrowShort = (a, b) => a + b;

console.log(sumArrowShort(3, 4)); // 👉 7

// Single parameter → brackets optional
const cube = n => n * n * n;

console.log(cube(8)); // 👉 512


// =========================================
// 🔹 6️⃣ REST OPERATOR (...)
// =========================================

// Rest operator → multiple arguments ko ek array bana deta hai
const totalSum = function (...numbers) {
    console.log(numbers);
};

totalSum(2, 3, 4);           // 👉 [2,3,4]
totalSum(4, 6, 1, 10, 13);   // 👉 [4,6,1,10,13]


// =========================================
// 🔹 7️⃣ SPREAD OPERATOR (...)
// =========================================

// Spread operator → values ko copy karta hai
let arr = [2, 3, 4, 5];
let arr2 = [...arr];

console.log(arr2); // 👉 [2,3,4,5]

// 🧠 arr aur arr2 alag memory me hain


// =========================================
// 🔹 8️⃣ OBJECT + DESTRUCTURING
// =========================================

let obj = {
    name: "Rohit",
    age: 30,
    amount: 420,
};

// Object se direct values nikalna
const { name, amount } = obj;
console.log(name, amount); // 👉 Rohit 420


// =========================================
// 🔹 9️⃣ OBJECT DESTRUCTURING IN FUNCTION
// =========================================

// Function parameter me destructuring
function showUser({ name, amount }) {
    console.log(name, amount);
}

showUser(obj);
// 👉 Rohit 420

// 🧠 Sirf required properties use ho rahi hain


// =========================================
// 🔹 🔟 PASS BY VALUE vs PASS BY REFERENCE
// =========================================

// Primitive → pass by value
// Object → pass by reference

function love(obj1) {
    obj1.amount = 999;
}

love(obj);
console.log(obj.amount);
// 👉 999 (object reference pass hua)


// =========================================
// 🔹 1️⃣1️⃣ OBJECT.CREATE & PROTOTYPE
// =========================================

let baseObj = {
    a: 1,
    b: 2,
};

let childObj = {
    c: 10,
};

// childObj ka prototype = baseObj
childObj = Object.create(baseObj);

// childObj me a nahi mila → prototype me search
console.log(childObj.a); // 👉 1

// Prototype chain:
// childObj → baseObj → Object.prototype → null


// =========================================
// 🔹 1️⃣2️⃣ FINAL TAKEAWAY
// =========================================

// ✅ Function = reusable logic
// ✅ return = output
// ✅ Arrow function = modern syntax
// ✅ Rest = collect values
// ✅ Spread = copy values
// ✅ Object reference pass hota hai
// ✅ Object.create = inheritance (prototype)
