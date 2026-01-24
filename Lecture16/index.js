// ===============================
// REDUCE — ARRAY → SINGLE VALUE
// ===============================
//
// reduce ka kaam:
// 👉 poore array par loop chalana
// 👉 aur ek FINAL RESULT banana
//
// Final result kisi bhi type ka ho sakta hai:
// number, string, object, array
//
// Syntax:
// array.reduce((accumulator, currentValue) => { }, initialValue)


// ==========================================
// EXAMPLE 1️⃣ : SUM OF NUMBERS
// ==========================================

// const arr = [10, 20, 30, 40, 50];

// acc = 0  → initial value
// curr = array ka har element

// const result = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);

// console.log(result);

// Output:
// 150



// ==========================================
// EXAMPLE 2️⃣ : FREQUENCY COUNT (VERY IMPORTANT)
// ==========================================

// Fruits ka array
let arr = [
    "orange",
    "apple",
    "banana",
    "orange",
    "apple",
    "banana",
    "orange",
    "grapes"
];

// Expected final output:
// {
//   orange: 3,
//   apple: 2,
//   banana: 2,
//   grapes: 1
// }

// acc = {}  → empty object (initial value)
// curr = current fruit name (string)

const result = arr.reduce((acc, curr) => {

    // Step 1: Check karo kya curr key pehle se acc object me exist karti hai
    if (acc.hasOwnProperty(curr)) {
        // Agar exist karti hai → count badha do
        acc[curr]++;
    } else {
        // Agar pehli baar aayi hai → count 1 se start
        acc[curr] = 1;
    }

    // Step 2: accumulator ko return karna mandatory hai
    return acc;

}, {});

console.log(result);

/*
OUTPUT:
{
  orange: 3,
  apple: 2,
  banana: 2,
  grapes: 1
}
*/
