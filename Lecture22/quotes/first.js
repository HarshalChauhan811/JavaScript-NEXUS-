// =====================================================
// 📚 QUOTES DATA
// =====================================================

const quotes = [
  "The best way to predict the future is to create it. — Peter Drucker",
  "Success is not final, failure is not fatal. — Winston Churchill",
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
  "It does not matter how slowly you go, as long as you do not stop. — Confucius",
  "Opportunities don't happen, you create them. — Chris Grosser",
  "You miss 100% of the shots you don’t take. — Wayne Gretzky",
  "In the middle of every difficulty lies opportunity. — Albert Einstein",
  "Dream big and dare to fail. — Norman Vaughan",
  "It always seems impossible until it's done. — Nelson Mandela"
];


// =====================================================
// 🎯 ELEMENT SELECTION
// =====================================================

const button = document.querySelector("button");
const text = document.getElementById("quote");


// =====================================================
// 🧠 COMMON FUNCTION (REUSABLE)
// =====================================================

function generateQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  text.textContent = quotes[index];
}


// =====================================================
// 🖱️ CLICK EVENT
// =====================================================

button.addEventListener("click", (event) => {
  console.log("EVENT OBJECT 👉", event);
  console.log("TARGET 👉", event.target);
  console.log("TYPE 👉", event.type);
  console.log("Mouse X 👉", event.clientX);
  console.log("Mouse Y 👉", event.clientY);

  generateQuote();
});

/*
OUTPUT (Console example):
EVENT OBJECT 👉 PointerEvent
TARGET 👉 <button>Generate Quotes</button>
TYPE 👉 click
Mouse X 👉 412
Mouse Y 👉 289
*/


// =====================================================
// 🖱️ DOUBLE CLICK EVENT
// =====================================================

button.addEventListener("dblclick", () => {
  text.textContent = "🔥 Double Click Detected!";
});


// =====================================================
// 🖱️ MOUSE OVER EVENT
// =====================================================

button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "orange";
});


// =====================================================
// 🖱️ MOUSE OUT EVENT
// =====================================================

button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "";
});


// =====================================================
// ⌨️ KEYBOARD EVENT (Enter key)
// =====================================================

document.addEventListener("keydown", (event) => {
  console.log("KEY PRESSED 👉", event.key);

  if (event.key === "Enter") {
    generateQuote();
  }
});

/*
OUTPUT:
KEY PRESSED 👉 Enter
*/


// =====================================================
// 🧠 QUICK REVISION (YAAD RAKH)
// =====================================================
//
// click      → mouse click
// dblclick   → double click
// mouseover  → mouse andar gaya
// mouseout   → mouse bahar gaya
// keydown    → keyboard press
//
// event object ke paas hota hai:
// event.target
// event.type
// event.key
// event.clientX / clientY
