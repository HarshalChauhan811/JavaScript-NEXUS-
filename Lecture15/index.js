// ⬛⬛⬛⬛⬛⬛ 📘 LECTURE 15 — ITERATION & ARRAY METHODS ⬛⬛⬛⬛⬛⬛
// 🎯 Focus: for-of, forEach, filter, map (+ common mistakes)


// =========================================
// 🔹 1️⃣ Object.defineProperty (SECURITY USE)
// =========================================

let user = {
    name: "rohit",
    age: 30
};

// name ko read-only bana diya (hacking se bachav)
Object.defineProperty(user, "name", {
    writable: false,
});

user.name = "mohit"; // ❌ change nahi hoga

console.log(Object.getOwnPropertyDescriptor(user, "name"));

// Output:
// {
//   value: 'rohit',
//   writable: false,
//   enumerable: true,
//   configurable: true
// }


// =========================================
// 🔹 2️⃣ for-of LOOP (ARRAY & STRING KE LIYE)
// =========================================

// for-of → VALUES par iterate karta hai
// ✅ Array
// ✅ String
// ❌ Object (directly nahi)

const arr1 = [10, 20, 11, 18, 13];

for (let value of arr1) {
    console.log(value);
}

// Output:
// 10
// 20
// 11
// 18
// 13


let str = "Rohit is Good Boy";

for (let ch of str) {
    console.log(ch);
}

// Output:
// R
// o
// h
// i
// t
//  
// i
// s
//  
// G
// o
// o
// d
//  
// B
// o
// y


// =========================================
// 🔹 3️⃣ for-of ❌ OBJECT KE SAATH
// =========================================

// Object iterable nahi hota
const obj = {
    name: "Chavvi",
    age: 22,
    gender: "female"
};

// ❌ ERROR
// for (let value of obj) {}

// ✅ Object ke liye for-in ya Object.keys()
for (let key of Object.keys(obj)) {
    console.log(key, obj[key]);
}

// Output:
// name Chavvi
// age 22
// gender female


// =========================================
// 🔹 4️⃣ forEach() — ARRAY METHOD
// =========================================
//
// forEach ek callback leta hai
// callback ke paas:
// value, index, poora array

let arr2 = [10, 20, 30, 40, 50];

arr2.forEach((num) => {
    console.log(num);
});

// Output:
// 10
// 20
// 30
// 40
// 50


// index & array bhi milta hai
arr2.forEach((num, index, a) => {
    a[index] = num * 2;
});

console.log(arr2);

// Output:
// [20, 40, 60, 80, 100]


// =========================================
// 🔹 5️⃣ filter() — CONDITION BASED SELECTION
// =========================================
//
// filter naya array deta hai
// sirf wahi elements jinke liye condition true ho

let arr3 = [10, 22, 33, 41, 50];

const even = arr3.filter((num) => num % 2 === 0);

console.log(even);

// Output:
// [10, 22, 50]


// REAL-WORLD EXAMPLE
const students = [
    { name: "Rohan", age: 22, marks: 70 },
    { name: "Mohan", age: 24, marks: 80 },
    { name: "Darshan", age: 28, marks: 30 },
    { name: "Mohit", age: 32, marks: 40 },
    { name: "Shadik", age: 12, marks: 90 },
];

// Marks > 50 wale students
const passed = students.filter(({ marks }) => marks > 50);

console.log(passed);

// Output:
// [
//   { name: 'Rohan', age: 22, marks: 70 },
//   { name: 'Mohan', age: 24, marks: 80 },
//   { name: 'Shadik', age: 12, marks: 90 }
// ]


// =========================================
// 🔹 6️⃣ map() — TRANSFORMATION
// =========================================
//
// map bhi naya array deta hai
// har element ko transform karta hai

const arr4 = [1, 2, 4, 5];

const mapped = arr4.map((num, index) => num * index);

console.log(mapped);

// Output:
// [0, 2, 8, 15]


// =========================================
// 🔹 7️⃣ forEach ❌ vs map ✅ (COMMON MISTAKE)
// =========================================

const wrong = arr4.forEach((num) => {
    return num;
});

console.log(wrong);

// Output:
// undefined
// ❌ forEach kuch return nahi karta


// =========================================
// 🔹 8️⃣ CHAINING: filter + map (POWER MOVE)
// =========================================

const arr5 = [1, 2, 3, 4, 5, 6];

// Even → square → half
const result = arr5
    .filter((num) => num % 2 === 0)
    .map((num) => num * num)
    .map((num) => num / 2);

console.log(result);

// Output:
// [2, 8, 18]


// =========================================
// 🔹 9️⃣ FINAL TAKEAWAY (LECTURE 15)
// =========================================
//
// ✅ for-of → array & string values
// ❌ for-of → object (directly)
// ✅ forEach → iterate (no return)
// ✅ filter → select (condition)
// ✅ map → transform
// ❌ forEach se result expect mat karo
// 🔥 chaining → clean & powerful code
