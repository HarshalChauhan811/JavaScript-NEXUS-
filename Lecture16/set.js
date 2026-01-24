// ===============================
// SET — UNIQUE VALUES COLLECTION
// ===============================
//
// Set ka kaam hota hai:
// 👉 sirf UNIQUE values store karna
// 👉 duplicate values automatically remove ho jaati hain
//
// Set bhi iterable hota hai (for-of, forEach possible)


// ==========================================
// 🔹 1️⃣ SET WITH DUPLICATES
// ==========================================

const setA = new Set([10, 20, 30, 40, 10, 30]);

console.log(setA);
console.log(typeof setA);

// Output:
// Set(4) { 10, 20, 30, 40 }
// object

// 🧠 10 aur 30 duplicate the → automatically remove ho gaye


// ==========================================
// 🔹 2️⃣ EMPTY SET + add()
// ==========================================

const set1 = new Set();

set1.add(4);
set1.add(6);
set1.add("Rohit");
set1.add(30);

// duplicate add karne par ignore hota hai
set1.add(4);

// delete value
set1.delete(6);

console.log(set1);
console.log(set1.size);

// Output:
// Set(3) { 4, 'Rohit', 30 }
// 3


// ==========================================
// 🔹 3️⃣ has() — EXISTENCE CHECK
// ==========================================

// Real-life example: unique user IDs
const user_id = new Set([
    "rohit_negi9",
    "Mohi_91",
    "ravi.93",
    "chavi_90",
    "sumit._90"
]);

let new_user = "rohit_negi9";

console.log(user_id.has(new_user));

// Output:
// true

// clear() → sab remove
user_id.clear();
console.log(user_id);

// Output:
// Set(0) {}


// ==========================================
// 🔹 4️⃣ ARRAY → SET → ARRAY (REMOVE DUPLICATES)
// ==========================================

let arr = [10, 30, 20, 10, 40, 50, 30];

// array ko set banaya
const uniqueSet = new Set(arr);

// set ko wapas array banaya
arr = [...uniqueSet];

console.log(arr);

// Output:
// [ 10, 30, 20, 40, 50 ]

// 🧠 Ye MOST COMMON interview use case hai


// ==========================================
// 🔹 5️⃣ UNION OF TWO SETS
// ==========================================

let setX = new Set([10, 20, 30, 40, 50]);
let setY = new Set([10, 20, 70, 40]);

// union = dono ke saare unique elements
let unionSet = new Set([...setX, ...setY]);

console.log(unionSet);

// Output:
// Set(6) { 10, 20, 30, 40, 50, 70 }


// ==========================================
// 🔹 6️⃣ INTERSECTION OF TWO SETS
// ==========================================
//
// intersection = common elements

const intersectionSet = new Set(
    [...setX].filter((num) => setY.has(num))
);

console.log(intersectionSet);

// Output:
// Set(3) { 10, 20, 40 }


// ==========================================
// 🔹 7️⃣ ITERATING OVER SET
// ==========================================

// for-of loop
for (let value of setX) {
    console.log(value);
}

// Output:
// 10
// 20
// 30
// 40
// 50


// forEach
setX.forEach((value) => console.log(value));

// Output:
// 10
// 20
// 30
// 40
// 50


// ==========================================
// 🔹 FINAL TAKEAWAYS
// ==========================================
//
// ✅ Set → unique values only
// ✅ Order preserve hota hai
// ✅ add / delete / has / clear
// ✅ Array se duplicates hatane ke liye BEST
// ✅ Union & Intersection easily possible
