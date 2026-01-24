// Object banaya jisme kuch initial data hai
let obj = {
    name: "rohit",
    age: 10,
    orange: 1,
};

// Ye ek variable hai jisme key ka naam store hai
let curr = "apple";

// Direct likhne ke tareeke:
// obj.apple = 1;        // fixed key
// obj["apple"] = 1;     // string key
// obj[curr] = 1;        // dynamic key (BEST)

// ===============================
// CHECK: key already exist karti hai ya nahi
// ===============================

// hasOwnProperty check karta hai:
// kya obj ke paas khud ki ye key hai?
if (obj.hasOwnProperty(curr)) {
    // agar key exist karti hai → value increment
    obj[curr]++;
} else {
    // agar key nahi hai → nayi key bana do
    obj[curr] = 1;
}

// Final object print
console.log(obj);

/*
OUTPUT:
{
  name: 'rohit',
  age: 10,
  orange: 1,
  apple: 1
}
*/
