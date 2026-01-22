// =====================================
// 📌 Comparison Operators
// =====================================

// Number to Number comparison

let a1 = 1;
let a2 = 2;

console.log(a1 == a2);
// Output: false
// == check karta hai values equal hain ya nahi

// <  less than
// >  greater than
// <= less than equal to
// >= greater than equal to


// ===============================
// Number vs String (==)
// ===============================

let num = 10;
let str = "20";

console.log(num == str);
// Output: false
// == pehle type conversion karta hai (string → number)
// 10 == 20 → false


let a11 = 10;
let str1 = "10";

console.log(a11 == str1);
// Output: true
// string "10" number 10 me convert ho gaya


// ===============================
// === (Strict Equality)
// ===============================

// === pehle type check karta hai
// phir value compare karta hai

console.log(a11 === str1);
// Output: false
// number !== string


let a22 = 30;
let a33 = 40;

console.log(a22 === a33);
// Output: false


// ===============================
// null vs undefined
// ===============================

// Special JS rule ⚠️
// null == undefined → true
// null === undefined → false

console.log(null == undefined);
// Output: true

console.log(null === undefined);
// Output: false


// null sirf undefined ke saath == hota hai
console.log(null == 0);
// Output: false

console.log(null < 0);
// Output: false

console.log(null > 0);
// Output: false

console.log(null <= 0);
// Output: true  ⚠️
// Reason: null → 0 convert hota hai comparison me

console.log(null >= 0);
// Output: true


// ===============================
// undefined comparison
// ===============================

// undefined kisi number se compare nahi hota
console.log(undefined == 0);
// Output: false

console.log(undefined < 0);
// Output: false

console.log(undefined > 0);
// Output: false

console.log(undefined <= 0);
// Output: false

console.log(undefined >= 0);
// Output: false


// ===============================
// NaN comparison
// ===============================

// NaN kabhi bhi kisi ke equal nahi hota
// even khud ke bhi nahi

console.log(NaN == NaN);
// Output: false


// ===============================
// String → Number conversion
// ===============================

let str3 = "rohit";
console.log(Number(str3));
// Output: NaN


// ===============================
// Tricky Interview Question
// ===============================

let abc1 = 123;
let abc2 = "123";
let abc3 = 123;

console.log(abc1 == abc2 == abc3);
// Step:
// abc1 == abc2 → true
// true == abc3 → true == 123 → false
// Output: false  ⚠️


// Homework ka answer 😄
console.log(undefined != null);
// Output: false


// =====================================
// 📌 Logical Operators
// =====================================

let age = 18;
let money = 420;

// AND (&&) → dono condition true honi chahiye
console.log(age < 18 && money > 200);
// Output: false

// OR (||) → koi ek condition true ho
console.log(age > 10 || money > 200);
// Output: true

// NOT (!) → result ko ulta kar deta hai
console.log(!(age > 10));
// Output: false


// =====================================
// 📌 Bitwise Operators
// =====================================

// Bitwise AND (&)
console.log(4 & 5);
// 4 → 100
// 5 → 101
// --------
//     100 → 4
// Output: 4


console.log(11 & 14);
// 11 → 1011
// 14 → 1110
// ---------
//       1010 → 10
// Output: 10


// Bitwise OR (|)
console.log(11 | 14);
// 1011 | 1110 → 1111
// Output: 15


// Bitwise XOR (^)
console.log(5 ^ 7);
// 5 → 101
// 7 → 111
// --------
//     010 → 2
// Output: 2


// Left Shift (<<)
console.log(5 << 3);
// 5 × (2^3) = 5 × 8
// Output: 40


// Right Shift (>>)
console.log(20 >> 2);
// 20 ÷ (2^2) = 20 ÷ 4
// Output: 5



// Super Important Interview Takeaways

// == → type conversion karta hai

// === → no conversion, type + value

// null == undefined → true

// null <= 0 → true 😵

// NaN == NaN → false

// && → AND, || → OR, ! → NOT

// << → multiply by 2^n

// >> → divide by 2^n