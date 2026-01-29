// ===============================
// THIS KEYWORD IN JAVASCRIPT
// ===============================
//
// this = context (kisne call kiya hai)
// this ka value depend karta hai:
// 👉 function kaise call hua
// 👉 strict mode hai ya nahi
// 👉 arrow function hai ya normal
// 👉 object / class / global context


// ==================================================
// 1️⃣ GLOBAL CONTEXT
// ==================================================
//
// Browser me → window
// NodeJS me → {} (module.exports)
// Universal way → globalThis

// console.log(this);

// Browser Output:
// window
//
// NodeJS Output:
// {}


// ==================================================
// 2️⃣ FUNCTION CONTEXT (NORMAL FUNCTION)
// ==================================================

// ---------- Non-Strict Mode ----------
//
// function greet(){
//     console.log(this);
// }
//
// greet();
//
// Browser Output:
// window
//
// NodeJS Output:
// global object (or globalThis)


// ---------- Strict Mode ----------
"use strict";

function greetStrict(){
    console.log(this);
}

greetStrict();

// Output:
// undefined

// 🧠 Strict mode me:
// normal function ke andar `this` = undefined


// ==================================================
// 3️⃣ OBJECT METHOD CONTEXT
// ==================================================
//
// Method ke andar this → jis object ne call kiya

const obj = {
    name: "Rohit",
    age: 20,
    meet: function () {
        console.log(this.name);
    }
};

obj.meet();

// Output:
// Rohit


// ==================================================
// 4️⃣ ARROW FUNCTION & this
// ==================================================
//
// Arrow function ka khud ka this nahi hota
// Ye apne surrounding (lexical scope) ka this leta hai

const obj2 = {
    name: "rohit",
    age: 11,
    greet: () => {
        console.log(this);
    }
};

obj2.greet();

// Output (Browser):
// window
//
// Output (Node):
// {}

// ❌ yaha this = obj2 nahi hota


// ==================================================
// 5️⃣ ARROW FUNCTION INSIDE METHOD (IMPORTANT)
// ==================================================

const obj3 = {
    name: "rohit",
    age: 11,
    greet: function () {

        let ab = () => {
            console.log(this.name);
        };

        ab();
    }
};

obj3.greet();

// Output:
// rohit

// 🧠 Reason:
// arrow function ne this parent function se liya
// parent function ka this = obj3


// ==================================================
// 6️⃣ CONSTRUCTOR / CLASS CONTEXT
// ==================================================
//
// Constructor me this → new object instance

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let a = new Person("Rohit", 20);
console.log(a);

// Output:
// Person { name: 'Rohit', age: 20 }


// ==================================================
// 7️⃣ ARROW FUNCTION ALONE
// ==================================================

let arrowGreet = () => {
    console.log(this);
};

arrowGreet();

// Output (Browser):
// window
//
// Output (Node):
// {}


// ==================================================
// 8️⃣ FUNCTION EXPRESSION + STRICT MODE (FINAL CASE)
// ==================================================

"use strict";

let meet = function () {
    console.log(this);
};

meet();

// Output:
// undefined

// 🧠 Strict mode + normal function = this undefined


// ==================================================
// 🔥 FINAL GOLDEN RULES (YAAD RAKHNA)
// ==================================================
//
// ✅ Global scope → this = window / {} / globalThis
// ✅ Object method → this = object
// ❌ Arrow function → this nahi hota
// ✅ Arrow inside method → parent ka this
// ✅ Constructor / class → this = new instance
// ❌ Strict mode + normal function → undefined
