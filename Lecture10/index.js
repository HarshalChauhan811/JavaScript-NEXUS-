// ⬛⬛⬛⬛⬛⬛ LECTURE 10 — OBJECTS IN JAVASCRIPT (PART-1) ⬛⬛⬛⬛⬛⬛
//
// 🧠 OBJECT = JavaScript ka backbone
// JS me almost sab kuch object ke around hi ghoomta hai
// (arrays, functions, dates, JSON, APIs, etc.)


// ==================================================
// 1️⃣ OBJECT KYA HOTA HAI? (FIRST PRINCIPLE)
// ==================================================
//
// Real life socho:
// Ek user ke paas name, age, gender, balance hota hai
// Agar sab alag-alag variables me rakhenge → messy code
// Object in sab ko ek jagah pack kar deta hai
//
// 👉 Object = related data ka bundle
// 👉 Structure = key : value

const user = {
  name: "Bhupendar Jogi",          // key: name , value: string
  age: 20,                         // key: age  , value: number
  gender: "male",                  // key: gender
  "account-balance": 150           // special character wali key
};

console.log(user);
// Output: complete object


// ==================================================
// 2️⃣ OBJECT KEYS KE GOLDEN RULES
// ==================================================
//
// ⚠️ JavaScript internally SAARI KEYS ko STRING bana deta hai

const obj1 = { age: 25 };
console.log(obj1);
// Internally JS ise aise treat karta hai:
// { "age": 25 }

// ❌ Space / special character bina quotes ke allowed nahi
// account number: 10000  ❌ ERROR

// ✅ Quotes ke saath allowed
const obj2 = {
  "account number": 10000
};

console.log(obj2["account number"]);
// Output: 10000

// 🧠 Rule:
// Key me space ya special character ho → quotes mandatory


// ==================================================
// 3️⃣ OBJECT PROPERTIES ACCESS KARNA
// ==================================================
//
// 2 tareeke hote hain:
// 1. Dot notation
// 2. Bracket notation

// 🔹 Dot notation
// Fast, clean, readable
console.log(user.name);   // Bhupendar Jogi
console.log(user.age);    // 20

// 🔹 Bracket notation
// Zyada powerful & flexible
console.log(user["gender"]);            // male
console.log(user["account-balance"]);   // 150

// ⚡ Bracket notation kab use karna?
// 1. Key me space ho
// 2. Key me special character ho
// 3. Key variable se aa rahi ho (dynamic key)


// ==================================================
// 4️⃣ NUMBER KEYS IN OBJECT
// ==================================================

const numKeyObj = {
  0: "zero",
  1: "one"
};

console.log(numKeyObj[0]); // zero

// 🧠 Behind the scenes:
// 0 → "0"
// 1 → "1"
// Matlab number key bhi string ban jaati hai


// ==================================================
// 5️⃣ SPECIAL KEYS: null & undefined
// ==================================================

const weirdObj = {
  undefined: 50,
  null: "Harshal"
};

console.log(weirdObj.undefined); // 50
console.log(weirdObj["null"]);   // Harshal

// 🧠 Reason:
// JS keys ko string bana deta hai
// "undefined" , "null"


// ==================================================
// 6️⃣ OBJECT BANANE KE TAREEKE
// ==================================================

// ① OBJECT LITERAL {}  (MOST COMMON)
// Small / normal data ke liye best
const person1 = {
  name: "Harshal",
  age: 21
};

console.log(person1);


// ② new Object()  (rare use)
// Step-by-step object banana
const person2 = new Object();
person2.name = "Alice";
person2.age = 30;

console.log(person2);


// ③ CONSTRUCTOR FUNCTION (template style)
//
// Same structure ke multiple objects banana ho
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Alice", 20);
const p2 = new Person("Bob", 30);

console.log(p1);
console.log(p2);


// ④ CLASS (Modern industry standard)
//
// Clean syntax, OOP support
class People {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const p3 = new People("Harshal", 21, "male");
console.log(p3);


// ==================================================
// 7️⃣ OBJECT MODIFY KARNA
// ==================================================

let student = { name: "Saurav", age: 30 };

// ➕ Add new property
student.gender = "male";

// ✏️ Update existing property
student.age = 31;

// ❌ Delete property
delete student.name;

console.log(student);
// Output: { age: 31, gender: 'male' }


// ==================================================
// 8️⃣ COMMON OBJECT METHODS
// ==================================================

// Object.keys() → sirf keys
console.log(Object.keys(student));
// ['age', 'gender']

// Object.values() → sirf values
console.log(Object.values(student));
// [31, 'male']

// Object.entries() → key-value pairs
console.log(Object.entries(student));
// [ ['age', 31], ['gender', 'male'] ]


// ==================================================
// 9️⃣ OBJECT MERGE
// ==================================================

// 🔹 Object.assign()
// Syntax: Object.assign(target, source1, source2)

const a = { x: 1 };
const b = { y: 2 };

// ⚠️ Rule:
// Target me hamesha empty object {} do
const merged1 = Object.assign({}, a, b);
console.log(merged1);
// { x: 1, y: 2 }


// 🔹 Spread operator (...)
// Modern, clean, readable
const objA = { name: "Harshal", age: 21 };
const objB = { age: 25, city: "Mumbai" };

const merged2 = { ...objA, ...objB };
console.log(merged2);
// { name: 'Harshal', age: 25, city: 'Mumbai' }

// 🧠 Rule:
// Jo baad me spread hota hai → wahi overwrite karta hai


// ==================================================
// 🔟 Object.freeze ❄️ vs Object.seal 🔒
// ==================================================

// ❄️ freeze
// ❌ add
// ❌ delete
// ❌ update
const userFreeze = { name: "Amit", age: 22 };
Object.freeze(userFreeze);

userFreeze.age = 30;
userFreeze.city = "Delhi";

console.log(userFreeze);
// { name: 'Amit', age: 22 }


// 🔒 seal
// ❌ add
// ❌ delete
// ✅ update
const userSeal = { name: "Ravi", age: 25 };
Object.seal(userSeal);

userSeal.age = 26;
delete userSeal.name;

console.log(userSeal);
// { name: 'Ravi', age: 26 }


// ==================================================
// 1️⃣1️⃣ SHALLOW COPY vs DEEP COPY
// ==================================================

const original = {
  a: 1,
  nested: { x: 10 }
};

// ❌ Shallow copy (same reference)
const shallow = original;
shallow.nested.x = 99;

console.log(original.nested.x);
// 99 → dono same memory share kar rahe hain (danger)

// ✅ Deep copy (independent memory)
const deep = structuredClone(original);
deep.nested.x = 500;

console.log(original.nested.x); // 99
console.log(deep.nested.x);     // 500


// ==================================================
// ✅ END — LECTURE 10 OBJECTS (PART-1)
// ==================================================





// FINAL FEEL (EXAM + INTERVIEW)

// Object = key-value pairs

// Keys internally string hoti hain

// Dot = fast | Bracket = powerful

// Spread → last wins

// Freeze ❄️ = no change

// Seal 🔒 = update only

// Nested data = deep copy zaroori