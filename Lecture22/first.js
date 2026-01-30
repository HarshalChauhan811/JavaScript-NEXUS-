// =====================================================
// 🔘 COMMON BUTTON (Addition Calculator)
// =====================================================

// Page se button ko select kar rahe hain
const button = document.querySelector('button');

// Button pe click event lagaya
button.addEventListener('click', () => {

    // -------------------------------
    // 📥 INPUT READ KARNA
    // -------------------------------

    // First input field ka element
    const input1 = document.getElementById('first');

    // input.value hamesha STRING hoti hai
    // isliye Number() se number me convert karte hain
    const number1 = Number(input1.value);

    // Second input field
    const input2 = document.getElementById('second');
    const number2 = Number(input2.value);

    // Agar user ne number ke alawa kuch dala
    // to function yahin stop ho jaaye
    if (isNaN(number1) || isNaN(number2)) return;

    // -------------------------------
    // 📤 OUTPUT SHOW KARNA
    // -------------------------------

    const result = number1 + number2;
    const re = document.getElementById('result');

    re.textContent = "Result: " + result;
});


// =====================================================
// 🧮 BMI CALCULATOR
// =====================================================
// BMI = weight / (height * height)
// height → meter me hona chahiye

const bmiBtn = document.getElementById("bmiBtn");

bmiBtn.addEventListener("click", () => {

    const heightCm = Number(document.getElementById("height").value);
    const weightKg = Number(document.getElementById("weight").value);

    // Validation
    if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
        alert("Enter valid height & weight");
        return;
    }

    // cm → meter
    const heightMeter = heightCm / 100;

    // BMI formula
    const bmi = weightKg / (heightMeter * heightMeter);

    // Category decide karna
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    document.getElementById("bmiResult").textContent =
        `BMI: ${bmi.toFixed(2)} (${category})`;
});


// =====================================================
// 💰 DAHEJ CALCULATOR (MALE) — EDUCATIONAL ONLY
// =====================================================
// Base logic:
// 1 year salary + govt job bonus + education bonus

const dahejBtn = document.getElementById("dahejBtn");

dahejBtn.addEventListener("click", () => {

    const salary = Number(document.getElementById("salary").value);
    const jobType = document.getElementById("jobType").value;
    const education = document.getElementById("education").value;

    if (isNaN(salary) || salary <= 0) {
        alert("Enter valid salary");
        return;
    }

    // Base dahej = 12 months salary
    let dahej = salary * 12;

    // Govt job extra amount
    if (jobType === "govt") dahej += 500000;

    // Education bonus
    if (education === "master") dahej += 300000;
    if (education === "phd") dahej += 700000;

    document.getElementById("dahejResult").textContent =
        `Estimated Dahej: ₹${dahej}`;
});


// =====================================================
// 💸 ALIMONY CALCULATOR (FEMALE)
// =====================================================
// Base = 25% of husband income
// Marriage years effect
// Wife working adjustment

const alimonyBtn = document.getElementById("alimonyBtn");

alimonyBtn.addEventListener("click", () => {

    const income = Number(document.getElementById("husbandIncome").value);
    const years = Number(document.getElementById("marriageYears").value);
    const wifeStatus = document.getElementById("wifeStatus").value;

    if (isNaN(income) || isNaN(years) || income <= 0 || years <= 0) {
        alert("Enter valid details");
        return;
    }

    // Base alimony = 25% income
    let alimony = income * 0.25;

    // Marriage duration impact
    alimony += years * 2000;

    // Wife working hai to kam alimony
    if (wifeStatus === "yes") alimony -= 5000;

    document.getElementById("alimonyResult").textContent =
        `Estimated Monthly Alimony: ₹${alimony}`;
});


// =====================================================
// 🧠 SUMMARY (REVISION)
// =====================================================
//
// input.value → string hoti hai
// Number() → string → number
// isNaN() → invalid input check
// addEventListener → event handling
// textContent → output show
//
// Real-life logic + DOM = JS mastery
