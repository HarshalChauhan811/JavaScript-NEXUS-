// =====================================================
// 🎨 BACKGROUND COLOR CHANGER — COMPLETE EXPLANATION
// =====================================================
//
// Objective:
// Button pe click karte hi
// page ka background color change ho
//
// Concepts covered:
// ❌ Code Repetition problem
// ❌ Multiple Event Listeners issue
// ⚠️ Loop se partial improvement
// ✅ Event Delegation (BEST & OPTIMIZED)
// =====================================================



// =====================================================
// ❌ APPROACH 1: MANUAL EVENT LISTENERS (COMMENTED)
// =====================================================
//
// Har button ke liye alag variable + alag event
// Agar 100 buttons hon → 100 listeners ❌
//
// Problems:
// - Code bahut bada
// - Maintain karna mushkil
// - Memory waste
//

/*
const red = document.getElementById('red');
red.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'red';
});
*/



// =====================================================
// ⚠️ APPROACH 2: LOOP SE CODE SHORT
// =====================================================
//
// querySelectorAll('button') →
// Saare buttons ka NodeList deta hai
//
const buttons = document.querySelectorAll('button');

// body element ko store kar liya (reuse ke liye)
const body = document.body;

// buttons.forEach →
// Har button ke liye loop chalega
buttons.forEach((button) => {

    // ⚠️ PROBLEM:
// Har button ke liye alag event listener lag raha
// 100 buttons = 100 listeners ❌
    button.addEventListener('click', () => {

        // button.id me hi color ka naam hai
        // isliye id ko backgroundColor bana diya
        body.style.backgroundColor = button.id;
    });
});


// =====================================================
// ❌ ISSUE WITH ABOVE APPROACH
// =====================================================
//
// - Code readable hai ✔️
// - Repetition kam hua ✔️
// - BUT performance issue abhi bhi hai ❌
//
// Large applications me ye slow ho jaata hai
// =====================================================



// =====================================================
// ✅ FINAL & BEST APPROACH: EVENT DELEGATION
// =====================================================
//
// Idea:
// Click hamesha BUTTON pe hota hai
// Lekin event bubble hoke parent (#root) tak jaata hai
//
// To hum parent pe sirf EK listener lagate hain
// =====================================================


// Parent container select kiya
const root = document.getElementById('root');

// Sirf EK event listener
root.addEventListener('click', (event) => {

    // event.target → actual element jahan click hua
    // Agar BUTTON nahi hai (jaise h1), to ignore
    if (event.target.tagName === 'BUTTON') {

        // BUTTON ke id ka use karke
        // body ka background color set
        document.body.style.backgroundColor =
            event.target.id;
    }
});



// =====================================================
// 🧠 IMPORTANT CONCEPTS (INTERVIEW READY)
// =====================================================
//
// event.target
// → jis element pe click hua (BUTTON)
//
// event.currentTarget
// → jis element pe listener laga hai (#root)
//
// Event Delegation ka matlab:
// Parent pe listener
// Child events handle
//
// Advantages:
// ✔ Sirf 1 listener
// ✔ Memory efficient
// ✔ Fast performance
// ✔ Dynamic buttons ke liye bhi kaam karega
//
// 1000 buttons bhi add karo →
// code me koi change nahi ❗
// =====================================================
