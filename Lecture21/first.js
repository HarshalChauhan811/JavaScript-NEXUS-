// =====================================================
// 🔹 INITIAL DOM STATE
// =====================================================
/*
<ul>
  <li>CN</li>
  <li>HTML</li>
  <li>CSS</li>
  <li>JS</li>
</ul>
*/

const parent = document.getElementById("root");


// =====================================================
// 🧱 1️⃣ CREATE ELEMENT (<li>TS</li>) + append
// =====================================================

const li1 = document.createElement("li");
li1.innerHTML = "TS";
parent.appendChild(li1);

/*
OUTPUT DOM:
CN
HTML
CSS
JS
TS
*/


// =====================================================
// 🧱 2️⃣ FUNCTION TO ADD MULTIPLE <li>
// =====================================================

function attach(content){
    const element = document.createElement("li");
    element.innerHTML = content;

    const element2 = document.createElement("li");
    element2.innerHTML = content + " V2.0";

    parent.append(element, element2);
}

attach("React");
attach("Node");

/*
OUTPUT DOM:
CN
HTML
CSS
JS
TS
React
React V2.0
Node
Node V2.0
*/


// =====================================================
// 📝 3️⃣ TEXT NODE
// =====================================================

const textNode = document.createTextNode("Hello Coder Army");
parent.append(textNode);

/*
OUTPUT DOM (last me text):
...
Node V2.0
Hello Coder Army
*/


// =====================================================
// 🏷️ 4️⃣ ATTRIBUTE NODE
// =====================================================

// Create attribute
const attr = document.createAttribute("id");
attr.value = "first";

// First <li> ko access
const firstLi = parent.children[0];
firstLi.setAttributeNode(attr);

/*
OUTPUT:
<li id="first">CN</li>
*/

// Direct & recommended way
parent.setAttribute("data-custom", "20");
parent.removeAttribute("data-custom");


// =====================================================
// ➕ 5️⃣ prepend vs append
// =====================================================

const angular = document.createElement("li");
angular.innerHTML = "Angular";

// Start me add
parent.prepend(angular);

/*
OUTPUT DOM:
Angular
CN
HTML
CSS
JS
...
*/


// =====================================================
// 🔄 6️⃣ insertBefore & replaceChild
// =====================================================

// Insert before 2nd child
const vue = document.createElement("li");
vue.innerHTML = "Vue";

const secondChild = parent.children[1];
// parent.insertBefore(vue, secondChild);

/*
OUTPUT (if insertBefore):
Angular
Vue
CN
HTML
...
*/

// Replace 2nd child
parent.replaceChild(vue, secondChild);

/*
OUTPUT:
Angular
Vue
HTML
CSS
JS
...
*/


// =====================================================
// ⚡ 7️⃣ insertAdjacentElement / insertAdjacentHTML
// =====================================================

const box = document.createElement("div");
box.innerHTML = "Hello Coder Army";

// beforebegin → ul se pehle
parent.insertAdjacentElement("beforebegin", box);

/*
OUTPUT:
<div>Hello Coder Army</div>
<ul>...</ul>
*/

// afterbegin → ul ke andar start me
parent.insertAdjacentHTML("afterbegin", "<li>Vue-Start</li>");

/*
OUTPUT (inside ul, top):
Vue-Start
Angular
Vue
HTML
...
*/

// beforeend → ul ke andar end me
parent.insertAdjacentHTML("beforeend", "<li>Svelte-End</li>");

/*
OUTPUT (inside ul, bottom):
...
Node V2.0
Svelte-End
*/

// afterend → ul ke baad
parent.insertAdjacentElement("afterend", box.cloneNode(true));

/*
OUTPUT:
<ul>...</ul>
<div>Hello Coder Army</div>
*/


// =====================================================
// ❌ 8️⃣ REMOVE ELEMENT
// =====================================================

// Method 1: remove()
const elementToRemove = parent.querySelector("li");
elementToRemove.remove();

/*
OUTPUT:
First <li> removed
*/

// Method 2: removeChild()
// const child = parent.children[0];
// parent.removeChild(child);


// =====================================================
// 🧠 FINAL DOM SUMMARY
// =====================================================
//
// createElement        → element banata hai
// createTextNode       → sirf text
// append / prepend     → add
// insertBefore         → specific position
// replaceChild         → replace
// insertAdjacentHTML   → fast insert
// remove / removeChild→ delete
