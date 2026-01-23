// ⬛⬛⬛⬛⬛⬛ 📘 LECTURE 13 — CONTROL FLOW & LOOPS IN JS ⬛⬛⬛⬛⬛⬛
// 🎯 Control Flow = kaunsa code chalega, kab chalega, kitni baar chalega


// =========================================
// 🔹 1️⃣ IF - ELSE (DECISION MAKING)
// =========================================

let age = 7;

if (age >= 18) {
    console.log("✅ Eligible for vote");
} else {
    console.log("❌ Not Eligible for vote");
}

// Output:
// ❌ Not Eligible for vote
// (kyunki age = 7 < 18)


// =========================================
// 🔹 2️⃣ IF - ELSE IF - ELSE (MULTIPLE CONDITIONS)
// =========================================

let age2 = 49;

if (age2 < 18) {
    console.log("👶 KID");
} else if (age2 > 45) {
    console.log("👴 OLD");
} else {
    console.log("🧑 YOUNG");
}

// Output:
// 👴 OLD
// (kyunki age2 = 49 > 45)


// =========================================
// 🔹 3️⃣ SWITCH CASE (FIXED OPTIONS)
// =========================================

// getDay() → 0 to 6
// 0=Sunday, 1=Monday ... 6=Saturday

let day = new Date().getDay();

switch (day) {
    case 0:
        console.log("📅 SUNDAY");
        break;
    case 1:
        console.log("📅 MONDAY");
        break;
    case 2:
        console.log("📅 TUESDAY");
        break;
    case 3:
        console.log("📅 WEDNESDAY");
        break;
    case 4:
        console.log("📅 THURSDAY");
        break;
    case 5:
        console.log("📅 FRIDAY");
        break;
    case 6:
        console.log("📅 SATURDAY");
        break;
    default:
        console.log("❓ Not a valid day");
}

// Output (example):
// 📅 MONDAY
// (output current day par depend karega)


// =========================================
// 🔹 4️⃣ FOR LOOP (REPEAT FIXED TIMES)
// =========================================

for (let i = 0; i < 5; i++) {
    console.log("👋 Hello Coder Army");
}

// Output:
// 👋 Hello Coder Army
// 👋 Hello Coder Army
// 👋 Hello Coder Army
// 👋 Hello Coder Army
// 👋 Hello Coder Army


// =========================================
// 🔹 5️⃣ SUM OF FIRST N NUMBERS
// =========================================

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);

// Output:
// 55
// (1+2+3+...+10)


// =========================================
// 🔹 6️⃣ NESTED FOR LOOP (PATTERN)
// =========================================

// Expected pattern:
// 12345
// 12345
// 12345

for (let row = 1; row <= 3; row++) {
    let line = "";
    for (let col = 1; col <= 5; col++) {
        line += col;
    }
    console.log(line);
}

// Output:
// 12345
// 12345
// 12345


// =========================================
// 🔹 7️⃣ WHILE LOOP
// =========================================

let i = 1;

while (i <= 5) {
    console.log("👉", i);
    i++;
}

// Output:
// 👉 1
// 👉 2
// 👉 3
// 👉 4
// 👉 5


// =========================================
// 🔹 8️⃣ DO-WHILE LOOP
// =========================================

let j = 1;

do {
    console.log("✨", j);
    j++;
} while (j <= 3);

// Output:
// ✨ 1
// ✨ 2
// ✨ 3


// =========================================
// 🔹 9️⃣ LOOPING OVER ARRAY
// =========================================

let arr = [10, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Output:
// 10
// 30
// 40
// 50


// =========================================
// 🔹 🔟 LOOPING OVER OBJECT (for-in)
// =========================================

const obj = {
    name: "Rohit",
    age: 30,
    amount: 420,
    city: "Kotdwar"
};

for (let key in obj) {
    console.log(key, "👉", obj[key]);
}

// Output:
// name 👉 Rohit
// age 👉 30
// amount 👉 420
// city 👉 Kotdwar


// =========================================
// 🔹 1️⃣1️⃣ Object.keys() + LOOP
// =========================================

const keys = Object.keys(obj);

for (let i = 0; i < keys.length; i++) {
    console.log(obj[keys[i]]);
}

// Output:
// Rohit
// 30
// 420
// Kotdwar



// =========================================
// 🔹 1️⃣2️⃣ FINAL TAKEAWAY (LECTURE 13)
// =========================================
//
// ✅ if-else → decision making
// ✅ switch → fixed choices
// ✅ for → known iterations
// ✅ while → condition based
// ✅ do-while → at least once
// ✅ array loop → index based
// ✅ object loop → for-in best
