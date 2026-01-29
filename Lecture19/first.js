// ===============================
// window KYA HAI?
// ===============================

// Browser ka global object
console.log(window);

/*
OUTPUT (shortened):
Window { document: Document, console: Console, Math: Math, ... }
*/


// ===============================
// document KYA HAI?
// ===============================

// HTML page ka object version
console.log(document);

/*
OUTPUT:
#document
<html>...</html>
*/


// ===============================
// console.dir(document)
// ===============================

// document ka INTERNAL OBJECT STRUCTURE
console.dir(document);

/*
OUTPUT (expanded object):
Document {
  URL: "http://127.0.0.1:5500/",
  body: body,
  head: head,
  ...
}
*/


// ===============================
// window.document === document
// ===============================

console.log(window.document === document);

/*
OUTPUT:
true
*/

// Matlab: document window ke andar hi hota hai


// ===============================
// ELEMENT ACCESS BY ID
// ===============================

let h1 = document.getElementById("first");
console.log(h1);

/*
OUTPUT:
<h1 id="first" class="header1">Hello Coder Army</h1>
*/


// ===============================
// innerHTML / innerText
// ===============================

console.log(h1.innerHTML);
/*
OUTPUT:
Hello Coder Army
*/

console.log(h1.innerText);
/*
OUTPUT:
Hello Coder Army
*/


// ===============================
// YE PROPERTIES KAHAN SE AAYI?
// ===============================

console.log(h1.__proto__);
/*
OUTPUT:
HTMLElement
*/

console.log(h1.__proto__.__proto__);
/*
OUTPUT:
Element
*/

console.log(h1.__proto__.__proto__.__proto__);
/*
OUTPUT:
Node
*/


// ===============================
// PROTOTYPE CHAIN SUMMARY
// ===============================
//
// h1
// → HTMLElement
// → Element
// → Node
// → EventTarget
// → Object
// → null


// ===============================
// CLASS ACCESS: className KYU?
// ===============================

// ❌ h1.class   (ERROR / undefined)
// ✅ h1.className

console.log(h1.className);

/*
OUTPUT:
header1
*/

// Change class
h1.className = "newHeader";
console.log(h1.className);

/*
OUTPUT:
newHeader
*/


// ===============================
// classList (MODERN WAY)
// ===============================

h1.classList.add("active");
console.log(h1.className);

/*
OUTPUT:
newHeader active
*/

h1.classList.remove("newHeader");
console.log(h1.className);

/*
OUTPUT:
active
*/


// ===============================
// getElementsByClassName
// ===============================

let headers = document.getElementsByClassName("header1");
console.log(headers);

/*
OUTPUT:
HTMLCollection(1)
0: h2#second.header1
*/


// ===============================
// INDEX SE CHANGE
// ===============================

headers[0].id = "newID";
headers[0].innerText = "Updated Topics";

console.log(headers[0].id);
/*
OUTPUT:
newID
*/


// ===============================
// innerHTML vs textContent
// ===============================

headers[0].innerHTML = "<b>Bold Text</b>";
console.log(headers[0].innerText);

/*
OUTPUT:
Bold Text
*/


// ===============================
// FINAL CHECK
// ===============================

console.log(typeof document);
/*
OUTPUT:
object
*/

console.log(typeof window);
/*
OUTPUT:
object
*/



// 🧠 AB DIMAG ME BAITHANE KE LIYE (VERY IMPORTANT)

// 🔹 window

// Browser ka sabse upar wala object

// document, console, Math sab isi ke andar

// 🔹 document

// HTML ka object version

// #document isliye dikhta hai console me

// 🔹 console.dir(document)

// Object ki real properties & prototype dikhata hai

// 🔹 innerHTML / innerText

// Ye element me likhe nahi hote

// Ye prototype chain se aate hain

// 🔹 className kyu?

// class → JavaScript ka reserved keyword

// Isliye DOM me className use hota hai