// 🎯 Topic: for-in loop array ke saath kyun avoid karte hain


// =========================================
// 🔹 ARRAY IS ALSO AN OBJECT
// =========================================
//
// JavaScript me array technically ek object hi hota hai
// Isliye hum array me extra properties add kar sakte hain

const arr = [10, 20, 40, 12, 30];

// Array me manually properties add kar di
arr.name = "Rohit";
arr.age = 20;


// =========================================
// 🔹 NORMAL for LOOP (RECOMMENDED FOR ARRAY)
// =========================================
//
// Ye sirf index-based values deta hai
// Safe + predictable

for (let index = 0; index < arr.length; index++) {
    console.log(index, arr[index]);
}

// Output:
// 0 10
// 1 20
// 2 40
// 3 12
// 4 30


// =========================================
// 🔹 for-in LOOP ON ARRAY (⚠️ DANGEROUS)
// =========================================
//
// for-in loop KEYS par iterate karta hai
// Array ke case me:
// ✔️ index bhi key hai
// ✔️ extra properties bhi key ban jaati hain

for (let key in arr) {
    console.log(key);
}

// Output:
// 0
// 1
// 2
// 3
// 4
// name
// age


// =========================================
// 🔹 PROBLEM EXPLAINED (VERY IMPORTANT)
// =========================================
//
// arr internally aisa dikh sakta hai:
//
// {
//   0: 10,
//   1: 20,
//   2: 40,
//   3: 12,
//   4: 30,
//   name: "Rohit",
//   age: 20
// }
//
// for-in sabhi enumerable keys print karta hai
// Isliye name & age bhi aa gaye ❌


// =========================================
// 🔹 GOLDEN RULE (EXAM + INTERVIEW)
// =========================================
//
// ❌ for-in → ARRAY ke liye avoid karo
// ✅ for / for-of → ARRAY ke liye best
// ✅ for-in → OBJECT ke liye best


// =========================================
// 🔹 BETTER OPTION: for-of LOOP
// =========================================
//
// for-of sirf VALUES deta hai
// extra properties ignore ho jaati hain

for (let value of arr) {
    console.log(value);
}

// Output:
// 10
// 20
// 40
// 12
// 30


// =========================================
// 🔹 FINAL TAKEAWAY (LECTURE 14)
// =========================================
//
// ✅ Array technically object hota hai
// ❌ for-in array par use karoge → unexpected keys
// ✅ Array → for / for-of
// ✅ Object → for-in
