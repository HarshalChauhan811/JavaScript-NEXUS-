// ==================================================
// 1️⃣ SHALLOW COPY vs DEEP COPY (BASIC)
// ==================================================

let obj1 = {
    a: 1,
    b: 2
};

// ❌ Shallow copy (same reference)
let obj2 = obj1;

// obj2 change → obj1 bhi change
obj2.a = 10;

console.log(obj2, obj1);
// Output:
// { a: 10, b: 2 } { a: 10, b: 2 }

// 🧠 Reason:
// obj1 aur obj2 same memory location ko point kar rahe hain


// ✅ Deep copy (independent memory)
let obj3 = structuredClone(obj1);

obj3.a = 20;

console.log(obj3, obj1);
// Output:
// { a: 20, b: 2 } { a: 10, b: 2 }


// ==================================================
// 2️⃣ SHALLOW COPY PROBLEM IN NESTED OBJECT
// ==================================================

const user = {
    name: "Rohit",
    balance: 420,
    address: {
        pincode: 246149,
        city: "Kotdwar"
    }
};

// ❌ Object.assign() → shallow copy
const user2 = Object.assign({}, user);

console.log(user2);
// Output: copy of user

// Nested object me change
user2.address.pincode = 321314;

console.log(user.address.pincode);
// Output: 321314 ❌

// 🧠 Reason:
// address object dono jagah same reference share kar raha hai

// ✅ Solution:
// structuredClone(user) → deep copy


// ==================================================
// 3️⃣ OBJECT DESTRUCTURING
// ==================================================

let obj = {
    name: "Rohit",
    money: 430,
    balance: 30,
    age: 20,
    aadhar: "hfdsiohsai"
};

// Basic destructuring
const { name, balance, age } = obj;
console.log(name, balance, age);
// Output: Rohit 30 20

// Rename variables
const { name: full_name, balance: amount, age: Umar } = obj;
console.log(full_name, amount, Umar);
// Output: Rohit 30 20

// Rest operator with destructuring
const { name: userName, age: userAge, ...obj1Rest } = obj;
console.log(obj1Rest);
// Output: { money: 430, balance: 30, aadhar: 'hfdsiohsai' }


// ==================================================
// 4️⃣ ARRAY DESTRUCTURING
// ==================================================

const arr1 = [3, 2, 1, 5, 10];

// First two elements
const [first, second] = arr1;
console.log(first, second);
// Output: 3 2

// Skip elements
const [a, b, , c] = arr1;
console.log(a, b, c);
// Output: 3 2 5

// Rest operator in array
const [x, y, ...third] = arr1;
console.log(third);
// Output: [1, 5, 10]


// ==================================================
// 5️⃣ NESTED OBJECT + ARRAY DESTRUCTURING
// ==================================================

let objNested = {
    name: "Rohit",
    age: 20,
    arr: [90, 40, 60, 80],
    address: {
        pincode: 246149,
        city: "Kotdwar",
        state: "UK"
    }
};

// Nested object destructuring
const { address: { pincode, city } } = objNested;
console.log(pincode, city);
// Output: 246149 Kotdwar

// Array inside object destructuring
const { arr: [firstElement] } = objNested;
console.log(firstElement);
// Output: 90


// ==================================================
// 6️⃣ OBJECT METHODS
// ==================================================

let userObj = {
    name: "Rohit",
    amount: 420,
    greet: function () {
        console.log("Hello Coder Army");
    },
    meet: function () {
        return 20;
    }
};

console.log(userObj.greet());
// Output:
// Hello Coder Army
// undefined

console.log(userObj.meet());
// Output: 20

// 🧠 greet() kuch return nahi karta → undefined


// ==================================================
// 7️⃣ PROTOTYPE CHAINING (CORE CONCEPT)
// ==================================================

let protoObj = {
    name: "Rohit",
    amount: 420,
    greet: function () {
        return 10;
    }
};

// Humne toString() define nahi kiya
// Phir bhi access kar pa rahe hain
console.log(protoObj.toString());
// Output: [object Object]

// 🧠 Reason:
// protoObj → Object.prototype se inherit karta hai


// ==================================================
// 8️⃣ ARRAY IS ALSO AN OBJECT
// ==================================================

let arr = [2, 3, 1, 8];

// push() humne define nahi kiya
// Ye Array.prototype se aata hai
arr.push(10);

console.log(arr);
// Output: [2, 3, 1, 8, 10]

// Prototype chain:
// arr → Array.prototype → Object.prototype → null





// FINAL TAKEAWAYS (EXAM / INTERVIEW READY)

// obj2 = obj1 → ❌ shallow copy

// structuredClone() → ✅ deep copy

// Object.assign() → ❌ nested ke liye unsafe

// Destructuring → code short & readable

// ...rest → bachi properties collect karta hai

// Object methods → function as value

// toString() / push() → prototype se aate hain

// Array bhi object hai