// =====================================
// 📌 Number vs new Number()
// =====================================

// Primitive number
let num1 = 231;

// Number object (Non-Primitive)
let num2 = new Number(231);
let num3 = new Number(231);

console.log(num1 == num2);
// Output: true
// Reason: == value compare karta hai (object unwrap ho jata hai)

console.log(num2 == num3);
// Output: false
// Reason: dono alag-alag objects hain (reference different)

console.log(num2);
// Output: [Number: 231]

console.log(typeof num2);
// Output: object ⚠️


// =====================================
// 📌 Number Methods
// =====================================

let num = 231.68;

// toFixed(n) → decimal ke baad n digits
console.log(num.toFixed(3));
// Output: 231.680

// toPrecision(n) → total digits n
console.log(num.toPrecision(4));
// Output: 231.7

// toExponential(n) → scientific notation
console.log(num.toExponential(2));
// Output: 2.32e+2

// toString() → number ko string banata hai
console.log(typeof num.toString());
// Output: string

// valueOf() → primitive value deta hai
console.log(num.valueOf());
// Output: 231.68


// =====================================
// 📌 Math Object (Built-in)
// =====================================

// Important Math constants
console.log(Math.E);
// Output: 2.718281828459045

console.log(Math.LN10);
// Output: 2.302585092994046

console.log(Math.PI);
// Output: 3.141592653589793

console.log(Math.LOG10E);
// Output: 0.4342944819032518


// =====================================
// 📌 Math.floor() & Math.ceil()
// =====================================

let numA = 23.1;

console.log(Math.floor(numA));
// Output: 23  (neeche wali value)

console.log(Math.ceil(numA));
// Output: 24  (upar wali value)


// =====================================
// 📌 Math.random()
// =====================================

// Math.random() → 0 (inclusive) se 1 (exclusive) ke beech value deta hai
// 0 <= value < 1

console.log(Math.floor(Math.random() * 10));
// Output: 0 se 9 ke beech koi bhi number


// =====================================
// 📌 Random Number Ranges
// =====================================

// 1 – 10
console.log(Math.floor(Math.random() * 10) + 1);
// Output: 1 se 10

// 11 – 20
console.log(Math.floor(Math.random() * 10) + 11);
// Output: 11 se 20

// Generic formula 👇
// Math.floor(Math.random() * (max - min + 1) + min)

let min = 40;
let max = 50;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
// Output: 40 se 50 ke beech


// 0 – 10
console.log(Math.floor(Math.random() * 11));
// Output: 0 se 10

// 2 – 12
console.log(Math.floor(Math.random() * 11 + 2));
// Output: 2 se 12

// 30 – 40
console.log(Math.floor(Math.random() * (40 - 30 + 1) + 30));
// Output: 30 se 40


// =====================================
// 🎲 Ludo Dice (1 – 6)
// =====================================

console.log(Math.floor(Math.random() * (6 - 1 + 1) + 1));
// Output: 1 se 6 (dice number)




// Ultra-Important Interview Points

// new Number() → ❌ avoid (object ban jata hai)

// == → value compare

// === → type + value

// num2 == num3 → false (different objects)

// Math.random() → kabhi 1 nahi deta

// Random formula yaad rakho 👇

// Math.floor(Math.random() * (max - min + 1) + min)