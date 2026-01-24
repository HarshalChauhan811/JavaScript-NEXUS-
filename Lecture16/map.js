// ===============================
// MAP — KEY VALUE PAIRS (ADVANCED)
// ===============================
//
// Map bhi key-value store karta hai
// BUT object se zyada powerful hota hai
//
// 🔹 Key unique hoti hai
// 🔹 Same key dubara set karo → value update
// 🔹 Keys kisi bhi type ki ho sakti hain
//    (number, string, object, function, etc)


// ==========================================
// EXAMPLE 1️⃣ : BASIC MAP OPERATIONS
// ==========================================

const map1 = new Map();

// set(key, value)
map1.set(3, 90);
map1.set("Rohit", 45);
map1.set(20, "Mohan");

// Same key dubara → value update
map1.set("Rohit", 40);

// delete(key)
map1.delete(3);

// has(key) → true / false
console.log(map1.has("Rohit"));  
// Output: true

// size → number of entries
console.log(map1.size);          
// Output: 2

// clear() → sab delete
map1.clear();
console.log(map1);
// Output: Map(0) {}


// ==========================================
// EXAMPLE 2️⃣ : MAP WITH INITIAL VALUES
// ==========================================

// Array of arrays → Map
const map2 = new Map([
    [4, "rohit"],
    ["Moahn", "rohan"],
    [30, 9],
    [63, 78]
]);

console.log(map2);
/*
Output:
Map(4) {
  4 => 'rohit',
  'Moahn' => 'rohan',
  30 => 9,
  63 => 78
}
*/


// ==========================================
// EXAMPLE 3️⃣ : ITERATING MAP (for-of)
// ==========================================
//
// Map iterable hota hai
// for-of se direct key & value mil jaati hai

for (let [key, value] of map2) {
    console.log(key, value);
}

/*
OUTPUT:
4 rohit
Moahn rohan
30 9
63 78
*/


// ==========================================
// EXAMPLE 4️⃣ : MAP.forEach()
// ==========================================
//
// forEach callback ko deta hai:
// (value, key, completeMap)

map2.forEach((value, key) => {
    console.log(key, "👉", value);
});

/*
OUTPUT:
4 👉 rohit
Moahn 👉 rohan
30 👉 9
63 👉 78
*/


// ==========================================
// MAP vs OBJECT (CLEAR DIFFERENCE)
// ==========================================

// ---------- OBJECT ----------
const obj = {
    name: "Rohit",
    age: 23,
    10: "Ten"
};

// Object iteration (for-in)
for (let key in obj) {
    console.log(key, obj[key]);
}

/*
OUTPUT (order may vary):
10 Ten
name Rohit
age 23
*/

// Object me key number bhi string ban jaati hai
console.log(obj[10]);    // Ten
console.log(obj["10"]);  // Ten


// ---------- MAP ----------
const map3 = new Map();

map3.set("name", "Rohit");
map3.set("age", 23);
map3.set(10, "Ten");

// Map iteration (for-of)
for (let [key, value] of map3) {
    console.log(key, value);
}

/*
OUTPUT:
name Rohit
age 23
10 Ten
*/

// Map me key ka type maintain hota hai
console.log(map3.get(10));    // Ten
console.log(map3.get("10"));  // undefined


// ==========================================
// FINAL TAKEAWAY
// ==========================================
//
// OBJECT:
// ❌ keys sirf string/symbol
// ❌ size direct nahi
// ❌ iteration thodi limited
//
// MAP:
// ✅ keys any data type
// ✅ insertion order preserved
// ✅ size property available
// ✅ clean iteration (for-of, forEach)
//
// 👉 Dynamic / complex data → MAP
// 👉 Simple static data → OBJECT





// INTERVIEW ONE-LINERS (YAAD RAKHNA)

// Map iterable hota hai, Object nahi

// Map keys strict hoti hain (10 ≠ "10")

// map.forEach(value, key) — order preserved

// Frequent add/delete ho → Map best