
// =====================================
// 1️⃣ CURRENT DATE OBJECT
// =====================================

const d = new Date();

console.log(d.toDateString());
// Output: Mon Jan 22 2026 (example)

console.log(d.toString());
// Output: Mon Jan 22 2026 18:45:30 GMT+0530 (India Standard Time)

console.log(d.toISOString());
// Output: 2026-01-22T13:15:30.000Z


// =====================================
// 2️⃣ GET METHODS (READ DATE PARTS)
// =====================================

console.log(d.getDate());
// Output: 22  (Date → 1–31)

console.log(d.getDay());
// Output: 1
// 0=Sunday, 1=Monday, 2=Tuesday ... 6=Saturday

console.log(d.getMonth());
// Output: 0
// Month is 0-based → Jan=0, Feb=1, Mar=2 ...

console.log(d.getFullYear());
// Output: 2026

console.log(d.getMilliseconds());
// Output: 231 (example)

console.log(d.getMinutes());
// Output: 45 (example)

console.log(d.getTime());
// Output: 1769087730231 (milliseconds since 1 Jan 1970)


// =====================================
// 3️⃣ Date.now()
// =====================================

const now = Date.now();
console.log(now);
// Output: 1769087730231 (milliseconds)


// =====================================
// 4️⃣ STRING vs NUMBER DATE CREATION
// =====================================

// 🔹 STRING → Month is 1-based
const d1 = new Date("2022-10-20");
console.log(d1.toDateString());
// Output: Thu Oct 20 2022

// 🔹 NUMBER → Month is 0-based
// year, month, date, hour, min, sec, ms
const date = new Date(2024, 5, 28, 10, 12, 45, 231);
console.log(date.toString());
// Output: Fri Jun 28 2024 10:12:45 GMT+0530


// =====================================
// 5️⃣ SET METHODS (MODIFY DATE)
// =====================================

const d2 = new Date();

d2.setDate(20);
d2.setFullYear(2021);
d2.setMonth(3); // April (0-based)

console.log(d2.toLocaleString());
// Output: 20/4/2021, 18:45:30 (example)


// =====================================
// 6️⃣ DATE DIFFERENCE (CALCULATION)
// =====================================

const dateA = new Date();
const dateB = new Date("2025-04-21");

console.log(dateB - dateA);
// Output: difference in milliseconds


// =====================================
// 7️⃣ COUNTDOWN TIMER (OLYMPICS)
// =====================================
// Goal: Days, Hours, Minutes, Seconds

const startDate = new Date();
const olympicsDate = new Date("2028-07-14T00:00:00");

// Difference in milliseconds
const diff = olympicsDate - startDate;
console.log(diff);
// Output: milliseconds remaining

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
const seconds = Math.floor((diff / 1000) % 60);

console.log(
  `Olympics CountDownTime: Days:${days} Hour:${hours} Minute:${minutes} Second:${seconds}`
);
// Output:
// Olympics CountDownTime: Days:900 Hour:5 Minute:22 Second:10 (example)


// =====================================
// ✅ END — DATE & TIME IN JAVASCRIPT
// =====================================
