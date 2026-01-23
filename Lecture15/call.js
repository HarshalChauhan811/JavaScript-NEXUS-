// ⬛⬛⬛⬛⬛⬛ 📘 LECTURE 15 — CALLBACK FUNCTIONS IN JAVASCRIPT ⬛⬛⬛⬛⬛⬛
// 🎯 Focus: Callback kya hota hai, kaise kaam karta hai, real-life use


// =========================================
// 🔹 1️⃣ CALLBACK FUNCTION KYA HOTA HAI?
// =========================================
//
// Callback function =
// Ek function jo doosre function ko argument ke roop me diya jaata hai
// Aur baad me call hota hai
//
// 👉 Matlab: "abhi nahi, baad me call karna"


// =========================================
// 🔹 2️⃣ BASIC CALLBACK EXAMPLE
// =========================================

function names(fun) {
    console.log("👋 Hello I am name function");

    // yahan par callback function call ho raha hai
    fun();
}

// Ye callback function hai
const greet = function () {
    console.log("😊 I am Callback Function");
};

// function ke andar function pass kiya
names(greet);

// Output:
// 👋 Hello I am name function
// 😊 I am Callback Function


// =========================================
// 🔹 3️⃣ CALLBACK AS ANONYMOUS FUNCTION
// =========================================
//
// Anonymous = jiska naam nahi hota

names(function () {
    console.log("😎 I am Anonymous Callback Function");
});

// Output:
// 👋 Hello I am name function
// 😎 I am Anonymous Callback Function


// =========================================
// 🔹 4️⃣ CALLBACK AS ARROW FUNCTION
// =========================================
//
// Arrow function bhi callback ban sakta hai

names(() => {
    console.log("🚀 I am Arrow Callback Function");
});

// Output:
// 👋 Hello I am name function
// 🚀 I am Arrow Callback Function


// =========================================
// 🔹 5️⃣ REAL-LIFE USE: setInterval()
// =========================================
//
// setInterval(callback, time)
// callback → function jo baar-baar chalega
// time → milliseconds (1000ms = 1 second)

function fetchData() {
    console.log("📡 I am fetching data...");
}

// Har 5 second me fetchData chalega
setInterval(fetchData, 5000);

// Output (every 5 seconds):
// 📡 I am fetching data...
// 📡 I am fetching data...
// 📡 I am fetching data...


// =========================================
// 🔹 6️⃣ CALLBACK FLOW (DIMAG ME BAITHANE KE LIYE)
// =========================================
//
// setInterval(
//    fetchData,   ← callback function
//    5000         ← time delay
// )
//
// JS bolega:
// "5 second baad fetchData ko call karna"


// =========================================
// 🔹 7️⃣ IMPORTANT INTERVIEW POINTS
// =========================================
//
// ✅ Function ko argument ke roop me pass karna → callback
// ✅ Callback baad me call hota hai
// ✅ Anonymous / Arrow dono callback ban sakte hain
// ✅ setTimeout / setInterval / events sab callbacks use karte hain
// ⚠️ Callback zyada ho jaaye → Callback Hell (future topic)
