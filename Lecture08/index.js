// ⬛⬛⬛⬛⬛⬛ LECTURE 8 — ARRAYS IN JAVASCRIPT (WITH OUTPUT) ⬛⬛⬛⬛⬛⬛


// =====================================
// 1️⃣ ARRAY CREATION (FIRST PRINCIPLE)
// =====================================

let arr = [2, 3, 4, 1, 89, "Harshal", true];
console.log(arr);
// Output: [2, 3, 4, 1, 89, 'Harshal', true]


// =====================================
// 2️⃣ ARRAY INDEXING
// =====================================

console.log(arr[0]); 
// Output: 2

console.log(arr[1]); 
// Output: 3


// =====================================
// 3️⃣ ARRAY LENGTH
// =====================================

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.length);
// Output: 5

// ⚠️ length mutable hoti hai
arr1.length = 2;
console.log(arr1);
// Output: [1, 2]


// =====================================
// 4️⃣ ACCESS ELEMENTS (.at METHOD)
// =====================================

let arr2 = [10, 20, 30, 40];

console.log(arr2.at(1));
// Output: 20

console.log(arr2.at(-1));
// Output: 40


// =====================================
// 5️⃣ ARRAY COPY (REFERENCE vs DEEP COPY)
// =====================================

// ❌ Reference copy
const a = [1, 2, 3];
const b = a;

console.log(a == b);
// Output: true

b[0] = 99;
console.log(a);
// Output: [99, 2, 3]

// ✅ Deep copy
const c = structuredClone(a);
console.log(c == a);
// Output: false


// =====================================
// 6️⃣ PUSH & POP (END OPERATIONS)
// =====================================

let arr3 = [10, 20, 30];

arr3.push(40);
console.log(arr3);
// Output: [10, 20, 30, 40]

arr3.pop();
console.log(arr3);
// Output: [10, 20, 30]


// =====================================
// 7️⃣ SHIFT & UNSHIFT (START OPERATIONS)
// =====================================

arr3.unshift(5);
console.log(arr3);
// Output: [5, 10, 20, 30]

arr3.shift();
console.log(arr3);
// Output: [10, 20, 30]


// =====================================
// 8️⃣ DELETE (❌ AVOID)
// =====================================

delete arr3[1];
console.log(arr3);
// Output: [10, <1 empty item>, 30]


// =====================================
// 9️⃣ SEARCHING IN ARRAY
// =====================================

let arr4 = [2, 5, 8, 5, 9];

console.log(arr4.indexOf(5));
// Output: 1

console.log(arr4.lastIndexOf(5));
// Output: 3

console.log(arr4.includes(8));
// Output: true

console.log(arr4.includes(100));
// Output: false


// =====================================
// 🔟 SLICE (SAFE — NO CHANGE)
// =====================================

let arr5 = [2, 4, 6, 8, 10, 12];

let sliced = arr5.slice(2, 5);
console.log(sliced);
// Output: [6, 8, 10]

console.log(arr5);
// Output: [2, 4, 6, 8, 10, 12]

console.log(arr5.slice(-3));
// Output: [8, 10, 12]


// =====================================
// 1️⃣1️⃣ SPLICE (MODIFIES ARRAY)
// =====================================

let arr6 = [2, 4, 6, 8, 10];

arr6.splice(2, 2);
console.log(arr6);
// Output: [2, 4, 10]

arr6.splice(1, 0, "coder");
console.log(arr6);
// Output: [2, 'coder', 4, 10]

arr6.splice(2, 1, "JS");
console.log(arr6);
// Output: [2, 'coder', 'JS', 10]


// =====================================
// 1️⃣2️⃣ ARRAY → STRING
// =====================================

let arr7 = [1, 2, 3];

console.log(arr7.toString());
// Output: "1,2,3"

console.log(arr7.join(" * "));
// Output: "1 * 2 * 3"


// =====================================
// 1️⃣3️⃣ CONCAT ARRAYS
// =====================================

let x = [1, 2];
let y = [3, 4];
let z = [5, 6];

let merged = x.concat(y, z);
console.log(merged);
// Output: [1, 2, 3, 4, 5, 6]


// =====================================
// 1️⃣4️⃣ 2D ARRAY (MATRIX)
// =====================================

let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.log(matrix[2][2]);
// Output: 9


// =====================================
// 1️⃣5️⃣ FLAT (NESTED → 1D)
// =====================================

let nested = [1, [2, 3, [4, 5, [6]]]];

console.log(nested.flat(1));
// Output: [1, 2, 3, [4, 5, [6]]]

console.log(nested.flat(2));
// Output: [1, 2, 3, 4, 5, [6]]

console.log(nested.flat(Infinity));
// Output: [1, 2, 3, 4, 5, 6]


// =====================================
// 1️⃣6️⃣ ARRAY TYPE CHECK
// =====================================

console.log(Array.isArray([1,2,3]));
// Output: true

console.log(Array.isArray("hello"));
// Output: false


// =====================================
// 1️⃣7️⃣ new Array() (⚠️ TRICKY)
// =====================================

let bad = new Array(5);
console.log(bad.length);
