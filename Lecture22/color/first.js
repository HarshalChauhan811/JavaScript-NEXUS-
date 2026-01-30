// =====================================================
// 🖱️ CLICK EFFECT ON WHOLE PAGE
// =====================================================
// Jab bhi user body pe click karega,
// ek circle banega, random color lega,
// aur 5 second baad khud remove ho jaayega
// =====================================================

document.body.addEventListener("click", (event) => {
  
  // ---------------------------------------------------
  // 🔹 STEP 1: Ek naya div create kar rahe hain
  // Ye abhi sirf memory me hai, page pe nahi
  // ---------------------------------------------------
  const circle = document.createElement("div");

  // circle ko CSS styling dene ke liye class attach
  circle.className = "circle";

  // circle ke andar text likh diya
  circle.textContent = "Shesh";

  // ---------------------------------------------------
  // 🔹 STEP 2: Mouse ki exact position nikalna
  // clientX → left se distance
  // clientY → top se distance
  // ---------------------------------------------------
  const x = event.clientX;
  const y = event.clientY;

  // ---------------------------------------------------
  // 🔹 STEP 3: Circle ko cursor ke center pe rakhna
  // Circle ka size 50x50 hai
  // Isliye aadha (25px) minus kiya
  // ---------------------------------------------------
  circle.style.left = `${x - 25}px`;
  circle.style.top  = `${y - 25}px`;

  // ---------------------------------------------------
  // 🔹 STEP 4: Random color choose karna
  // Array se ek random color pick hoga
  // ---------------------------------------------------
  const colors = [
    "red",
    "blue",
    "orange",
    "green",
    "purple",
    "white",
    "yellow",
    "wheat"
  ];

  // Math.random() → random number
  // Math.floor() → decimal hata deta hai
  circle.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  // ---------------------------------------------------
  // 🔹 STEP 5: Circle ko DOM (page) me add karna
  // Ab ye screen pe dikhne lagega
  // ---------------------------------------------------
  document.body.appendChild(circle);

  // ---------------------------------------------------
  // 🔹 STEP 6: 5 second baad circle remove karna
  // setTimeout ek delay ke baad kaam karta hai
  // ---------------------------------------------------
  setTimeout(() => {
    circle.remove();   // DOM se element hata diya
  }, 5000);

});
