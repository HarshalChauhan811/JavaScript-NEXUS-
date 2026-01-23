// ⬛⬛⬛⬛⬛⬛ 📘 LECTURE 14 — for-in, Object.keys & PROTOTYPE ⬛⬛⬛⬛⬛⬛


// =========================================
// 🔹 1️⃣ SIMPLE OBJECT
// =========================================

let obj = {
    name: "rohan",
    age: 23,
    gender: "male",
    city: "kotdwar"
};

// obj.toString()  // inherited from Object.prototype


// =========================================
// 🔹 2️⃣ for-in LOOP (IMPORTANT)
// =========================================
//
// for-in loop object ki KEYS par iterate karta hai
// 👉 Sirf values nahi, pehle keys milti hain

for (let key in obj)
    console.log(key);

// Output:
// name
// age
// gender
// city


// =========================================
// 🔹 3️⃣ for-in WITH VALUES
// =========================================
//
// Key + value dono chahiye ho to

for (let key in obj) {
    console.log(key, "👉", obj[key]);
}

// Output:
// name 👉 rohan
// age 👉 23
// gender 👉 male
// city 👉 kotdwar


// =========================================
// 🔹 4️⃣ Object.keys()
// =========================================
//
// Object.keys() sirf OWN properties deta hai
// (prototype wali nahi)

console.log(Object.keys(obj));

// Output:
// [ 'name', 'age', 'gender', 'city' ]


// =========================================
// 🔹 5️⃣ OBJECT.CREATE() — PROTOTYPE SET
// =========================================
//
// obj ko prototype bana diya obj2 ke liye

let obj2 = Object.create(obj);

// obj2 ki apni properties
obj2.money = 420;
obj2.id = "Roh";


// =========================================
// 🔹 6️⃣ Object.keys() ON obj2
// =========================================
//
// Object.keys() → sirf obj2 ki OWN properties

console.log(Object.keys(obj2));

// Output:
// [ 'money', 'id' ]


// =========================================
// 🔹 7️⃣ for-in LOOP ON obj2 (IMPORTANT DIFFERENCE)
// =========================================
//
// for-in →
// ✔️ own properties
// ✔️ inherited properties (agar enumerable ho)

for (let key in obj2) {
    console.log(key);
}

// Output:
// money
// id
// name
// age
// gender
// city


// =========================================
// 🔹 8️⃣ WHY THIS HAPPENS? (CORE LOGIC)
// =========================================
//
// obj2 ke paas:
// ✔️ money, id (own)
// ❌ name, age, gender, city (direct nahi)
//
// JS flow:
// obj2 → prototype (obj) → Object.prototype → null
//
// for-in prototype chain follow karta hai
// Object.keys() prototype chain follow nahi karta


// =========================================
// 🔹 9️⃣ INTERVIEW GOLDEN RULES (LECTURE 14)
// =========================================
//
// ✅ for-in → own + inherited enumerable keys
// ✅ Object.keys() → sirf own keys
// ⚠️ for-in use karte waqt prototype ka dhyaan rakho
// ❌ Array par for-in avoid karo (unexpected results)
