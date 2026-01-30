// =====================================================
// 🎯 EVENT BUBBLING & EVENT CAPTURING
// =====================================================
//
// Event Flow ke 2 phases hote hain:
//
// 1️⃣ Event Capturing (Top → Bottom)
//    grandParent → parent → child
//
// 2️⃣ Event Bubbling (Bottom → Top)
//    child → parent → grandParent
//
// Default behavior = Bubbling
// =====================================================


// 🔹 Elements ko access kar liya
const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');


// =====================================================
// 🧠 DEFINITIONS (HINGLISH)
// =====================================================
//
// 🔁 Event Bubbling:
// Jab event child se start hoke
// parent → grandParent tak jata hai
//
// 🔽 Event Capturing:
// Jab event upar se (grandParent)
// niche (child) ki taraf jata hai
//
// addEventListener ka 3rd parameter:
// false → bubbling (default)
// true  → capturing
// =====================================================



// =====================================================
// 🔹 CHILD EVENT LISTENER
// =====================================================

child.addEventListener(
    'click',
    (event) => {
        console.log("✅ Child Clicked");

        // event.target → kis element pe click hua
        // console.log(event.target);

        // Agar yaha stopPropagation laga diya
        // to event upar nahi jaayega
        // event.stopPropagation();
    },
    false // 👈 false = Event Bubbling (default)
);


// =====================================================
// 🔹 PARENT EVENT LISTENER
// =====================================================

parent.addEventListener(
    'click',
    (event) => {
        console.log("🟡 Parent Clicked");

        // event.currentTarget → jispe listener laga hai
        // console.log(event.currentTarget);

        // stopPropagation → event ko yahin rok deta hai
        event.stopPropagation();
    },
    true // 👈 true = Event Capturing
);


// =====================================================
// 🔹 GRANDPARENT EVENT LISTENER
// =====================================================

grandParent.addEventListener(
    'click',
    (event) => {
        console.log("🔴 GrandParent Clicked");

        // console.log(event.currentTarget);
    },
    false // 👈 Bubbling phase
);


// =====================================================
// 🔥 IMPORTANT SYNTAX
// =====================================================
//
// element.addEventListener(
//   eventName,
//   callbackFunction,
//   useCapture
// );
//
// useCapture:
// false → Bubbling (default)
// true  → Capturing
// =====================================================



// =====================================================
// 🧠 OUTPUT FLOW (CURRENT CODE)
// =====================================================
//
// Click on CHILD div
//
// 1️⃣ Capturing phase:
//     Parent Clicked   (because parent has true)
//
// 2️⃣ Target phase:
//     Child Clicked
//
// 3️⃣ Bubbling phase:
//     ❌ Parent se aage nahi jayega
//        because parent me stopPropagation laga hai
//
// GrandParent print nahi hoga
// =====================================================



// =====================================================
// 📌 EVENT DELEGATION (CONCEPT ONLY)
// =====================================================
//
// Event Delegation me:
// - Parent pe listener lagate hain
// - Child ka event event.target se handle karte hain
//
// Ye large apps me performance ke liye best hota hai
// =====================================================




// QUICK RECAP (INTERVIEW)

// event.target → jis element pe click hua

// event.currentTarget → jis element pe listener laga

// stopPropagation() → event ko aage jaane se roke

// true → Capturing

// false → Bubbling (default)