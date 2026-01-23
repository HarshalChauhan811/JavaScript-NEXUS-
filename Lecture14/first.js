// ⬛⬛⬛⬛⬛⬛ 📘 LECTURE 14 — ADVANCED OBJECTS IN JAVASCRIPT ⬛⬛⬛⬛⬛⬛
// 🎯 Focus:
// - Property Descriptors (writable, enumerable, configurable)
// - Object.defineProperty()
// - Prototype & Enumeration
// - for-in loop traps (INTERVIEW IMPORTANT)


// ==================================================
// 🔹 1️⃣ DEFAULT OBJECT PROPERTY BEHAVIOUR
// ==================================================

let obj = {};

// Property normally add ki
obj.name = "Rohit";

// Property ka descriptor check karte hain
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// Output:
// {
//   value: 'Rohit',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// 🧠 Default behaviour:
// writable     → value change ho sakti hai
// enumerable   → loop / Object.keys me dikhegi
// configurable → delete ya redefine ho sakta hai


// ==================================================
// 🔹 2️⃣ Object.defineProperty()
// ==================================================

// defineProperty se hum rules ke saath property banate hain
Object.defineProperty(obj, "age", {
    value: 20,
    writable: true,
    enumerable: true,
    configurable: true,
});

console.log(obj);
// Output:
// { name: 'Rohit', age: 20 }


// ==================================================
// 🔹 3️⃣ writable:false (READ ONLY PROPERTY)
// ==================================================

// name ko read-only bana diya
Object.defineProperty(obj, "name", {
    writable: false,
});

obj.name = "Mohit"; // ❌ change nahi hoga
console.log(obj.name);

// Output:
// Rohit

// 🧠 writable:false → value change allowed nahi


// ==================================================
// 🔹 4️⃣ REAL-WORLD EXAMPLE (BANK DATA SECURITY)
// ==================================================

const customer = {
    name: "Rohit",
    age: 23,
    account_number: 123,
    balance: 2000,
};

// Sensitive fields ko lock kar diya
Object.defineProperty(customer, "name", {
    writable: false,
});

Object.defineProperty(customer, "account_number", {
    writable: false,
});

customer.name = "Mohit";
customer.account_number = 9999;

console.log(customer);

// Output:
// {
//   name: 'Rohit',
//   age: 23,
//   account_number: 123,
//   balance: 2000
// }


// ==================================================
// 🔹 5️⃣ PROTOTYPE & OBJECT.CREATE()
// ==================================================

// customer ko prototype bana diya
let customer2 = Object.create(customer);

customer2.city = "Haridwar";
customer2.place = "Delhi";

console.log(customer2.city);
// Output: Haridwar

console.log(customer2.name);
// Output: Rohit (prototype se inherited)

// 🧠 customer2 → customer → Object.prototype → null


// ==================================================
// 🔹 6️⃣ enumerable:false (HIDE PROPERTY FROM LOOPS)
// ==================================================

// name ko enumerable:false bana diya
Object.defineProperty(customer, "name", {
    enumerable: false,
});

// for-in loop sirf enumerable:true keys print karta hai
for (let key in customer) {
    console.log(key);
}

// Output:
// age
// account_number
// balance

// ❌ name print nahi hua (hidden ho gaya)


// ==================================================
// 🔹 7️⃣ for-in LOOP & INHERITED PROPERTIES
// ==================================================

// Rule:
// for-in loop →
// ✔️ own properties
// ✔️ inherited properties
// (sirf enumerable:true wali)


// ==================================================
// 🔹 8️⃣ Object.prototype DANGER ZONE ⚠️
// ==================================================

// Normally toString enumerable:false hota hai
console.log(
    Object.getOwnPropertyDescriptor(Object.prototype, "toString")
);

// Output:
// {
//   value: [Function: toString],
//   writable: true,
//   enumerable: false,
//   configurable: true
// }


// ❌ GALTI SE prototype ko enumerable bana diya
Object.defineProperty(Object.prototype, "toString", {
    enumerable: true,
});

// Ab prototype ki property bhi loop me aa jaayegi
for (let key in customer) {
    console.log(key);
}

// Output (DANGEROUS):
// age
// account_number
// balance
// toString   ❌ (Object.prototype se aa raha hai)


// ==================================================
// 🔹 9️⃣ INTERVIEW GOLDEN RULES (LECTURE 14)
// ==================================================

// ✅ writable:false      → value change nahi hogi
// ✅ enumerable:false    → loop me nahi dikhegi
// ✅ configurable:false → delete / redefine nahi hoga
// ✅ for-in loop         → own + inherited enumerable keys
// ❌ Object.prototype ko modify karna = BIG NO


// LECTURE 14 – FINAL FEEL (REAL TALK)

// 🔐 Security → writable:false

// 👀 Hide properties → enumerable:false

// 🧬 Inheritance → Object.create()

// ⚠️ Prototype pollution → interview + production dono me dangerous

// for-in = prototype chain follow karta hai