// =====================================
// 📌 Primitive Data Type Example
// =====================================

// Primitive data types value ke basis par copy hote hain
// (Call by Value)

let a = 10;
let b = a;   // yaha a ki VALUE copy hui hai

b = 30;       // sirf b change hoga

console.log(b);
// Output: 30

console.log(a);
// Output: 10

// 🔑 Conclusion:
// Primitive data type → Immutable
// Ek variable change karne se doosra affect nahi hota


// =====================================
// 📌 Primitive vs Non-Primitive
// =====================================

// Primitive Data Type → Immutable
// Example: Number, String, Boolean, null, undefined, Symbol, BigInt

// Non-Primitive Data Type → Mutable
// Example: Object, Array, Function


// =====================================
// 📌 Non-Primitive (Object) Example
// =====================================

// Non-primitive data types reference ke basis par copy hote hain
// (Call by Reference)

let obj1 = {
    id: 20,
    naming: "Harshal"
};

// obj2 ko obj1 ka REFERENCE milta hai
let obj2 = obj1;

// obj2 se change karne par
// actual object change ho jata hai
obj2.id = 30;

console.log(obj1);
// Output: { id: 30, naming: 'Harshal' }

console.log(obj2);
// Output: { id: 30, naming: 'Harshal' }


// 🔑 Conclusion:
// Non-Primitive data type → Mutable
// Dono variables same memory location ko point karte hain
