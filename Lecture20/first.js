// =====================================================
// ⏰ LIVE CLOCK (OPTIONAL PRACTICE)
// =====================================================

// function timing(){
//     const timer = document.getElementById('root');
//     const now = new Date();
//     const IndianTime = now.toLocaleTimeString();
//     timer.innerHTML = IndianTime;
// }

// setInterval(timing,1000);


// =====================================================
// 🎨 STYLING ELEMENT USING JS
// =====================================================

// const timer = document.getElementById('root');
// timer.style.fontSize = "200px";
// timer.style.display = "flex";
// timer.style.height = "100vh";
// timer.style.justifyContent = "center";
// timer.style.alignItems = "center";


// =====================================================
// 🎯 SELECTING ELEMENTS (querySelector)
// =====================================================

// ID selector
// const id = document.querySelector('#first');
// id.innerHTML = "Hello Money";

// CLASS selector
// const id2 = document.querySelector('.header2');
// id2.style.backgroundColor = "pink";


// =====================================================
// 🔁 ITERATING OVER NODELIST (querySelectorAll)
// =====================================================

// const obj = document.querySelectorAll('.header1');

// 🟢 Method 1: forEach (BEST)
// obj.forEach((val)=>{
//     console.log(val);
// });
/*
OUTPUT:
<h1 id="first" class="header1">...</h1>
<h2 id="second" class="header1">...</h2>
*/

// 🟡 Method 2: for-of
// for(let val of obj)
//     console.log(val);

// 🔵 Method 3: Normal for loop
// for(let i=0;i<obj.length;i++)
//     obj[i].style.color = "red";

// 🔁 Convert NodeList → Array
// Array.from(obj);


// =====================================================
// 🔁 ITERATING OVER HTMLCOLLECTION (getElementsByTagName)
// =====================================================

// const obj = document.getElementsByTagName('h1');
// let team = document.getElementsByTagName('li');

// 🟢 Method 1: for loop
// for(let i=0;i<team.length;i++)
//     team[i].style.color = "black";

// 🟡 Method 2: for-of
// for(let val of team)
//     console.log(val);

// 🔵 Method 3: Convert to Array
// Array.from(team).forEach((val)=>{
//     console.log(val);
// });


// =====================================================
// 🌳 PARENT & CHILD RELATIONSHIP
// =====================================================

const list = document.querySelector('li');

console.log(list.parentElement);
/*
OUTPUT:
<ul id="third" class="header2">...</ul>
*/

console.log(list.parentNode);
/*
OUTPUT:
<ul id="third" class="header2">...</ul>
*/


const par = document.querySelector('ul');

console.log(par);
/*
OUTPUT:
<ul id="third" class="header2">...</ul>
*/

console.log(par.childNodes);
/*
OUTPUT:
NodeList(9) [text, li, text, li, text, li, text, li, text]
*/

console.log(par.children);
/*
OUTPUT:
HTMLCollection(4) [li, li, li, li]
*/

console.log(par.firstChild);
/*
OUTPUT:
#text
*/

console.log(par.firstElementChild);
/*
OUTPUT:
<li>CN</li>
*/


// =====================================================
// 🔗 SIBLING NODES (⚠️ MOST CONFUSING PART)
// =====================================================

const h1 = document.getElementById("first");

// 🔹 nextSibling → text + element
console.log(h1.nextSibling);
/*
OUTPUT:
#text
*/

// 🔹 nextElementSibling → ONLY element
console.log(h1.nextElementSibling);
/*
OUTPUT:
<h2 id="second" class="header1">Topics Covered so far</h2>
*/

// 🔹 previousSibling
console.log(h1.previousSibling);
/*
OUTPUT:
#text
*/

// 🔹 previousElementSibling
console.log(h1.previousElementSibling);
/*
OUTPUT:
null
*/


// =====================================================
// 📝 innerHTML vs textContent vs innerText
// =====================================================

// HTML:
// <h1>Hello Coder <strong style="display:none">Army</strong></h1>

// 🟥 innerHTML → HTML + text
console.log(h1.innerHTML);
/*
OUTPUT:
Hello Coder <strong style="display: none;">Army</strong>
*/

// 🟢 textContent → ALL text (hidden bhi)
console.log(h1.textContent);
/*
OUTPUT:
Hello Coder Army
*/

// 🔵 innerText → ONLY visible text
console.log(h1.innerText);
/*
OUTPUT:
Hello Coder
*/


// =====================================================
// 🧠 QUICK EMOJI REVISION (YAAD RAKH)
// =====================================================
//
// 👀 nextSibling          → text + element
// 🎯 nextElementSibling   → sirf element
//
// 🟥 innerHTML   → HTML + text (⚠️ unsafe)
// 🟢 textContent → all text (fast & safe)
// 🔵 innerText   → visible text only
