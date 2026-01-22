// =====================================
// 📌 Primitive Data Type with const
// =====================================

// Primitive data types immutable hote hain
const num = 10;
console.log(num);
// Output: 10


// =====================================
// 📌 Non-Primitive Data Type with const
// =====================================

// const ka matlab object lock ho gaya ❌ nahi
// const ka matlab REFERENCE lock ho gaya ✔️

const obj = {
    id: 10,
    balance: 200
};

// Object ke andar ki value change kar sakte ho
obj.id = 11;
console.log(obj);
// Output: { id: 11, balance: 200 }


// =====================================
// 📌 const Object Reference Error
// =====================================

let obj2 = {
    id: 20,
    money: 30
};

// obj ka reference change karna allowed nahi
// obj = obj2; ❌ ERROR: Assignment to constant variable


// =====================================
// 📌 Strings in JavaScript
// =====================================

// String banane ke 3 tareeke hote hain

let str1 = "Hello Coder army";
let str2 = 'Mein toh mast hu';
let str3 = `Aur bhaiya kya haal chaal`;

let price = 80;

// ===============================
// Template Literal (Best Way ✅)
// ===============================

console.log(`price of the fresh tomato is ${price} , get is asap`);
// Output: price of the fresh tomato is 80 , get is asap


// ===============================
// Normal String + comma
// ===============================

console.log("price of the fresh tomato is", price, "get it asap");
// Output: price of the fresh tomato is 80 get it asap


// =====================================
// 📌 String Concatenation
// =====================================

let s1 = "hello";
let s2 = " Coder Army";
let s3 = s1 + s2;

console.log(s3.length);
// Output: 17


// =====================================
// 📌 Quotes inside String
// =====================================

console.log('"hello coder army"');
// Output: "hello coder army"

console.log("'hello coder army'");
// Output: 'hello coder army'


// =====================================
// 📌 Escape Characters
// =====================================

// \n → new line
let message = "Rohit Bhaiya bhut bade badmash hai. \nWo bhut gande insaan hai.";
console.log(message);
// Output:
// Rohit Bhaiya bhut bade badmash hai.
// Wo bhut gande insaan hai.


// \\ → backslash ko print karne ke liye
let comment = "Rohit Bhaiya bhut bade badmash hai. \\nWo bhut gande insaan hai.";
console.log(comment);
// Output: Rohit Bhaiya bhut bade badmash hai. \nWo bhut gande insaan hai.


// =====================================
// 📌 Access Character from String
// =====================================

let special = "Rohit";

// Indexing starts from 0
console.log(special[4]);
// Output: t

console.log(special.charAt(3));
// Output: i


// =====================================
// 📌 Uppercase / Lowercase
// =====================================

console.log(special.toLowerCase());
// Output: rohit

let strtemp = special.toUpperCase();
console.log(strtemp);
// Output: ROHIT

// Original string unchanged (strings immutable hote hain)
console.log(special);
// Output: Rohit


// =====================================
// 📌 Searching in String
// =====================================

let hero = "Hello Coder Army Coder";

console.log(hero.indexOf("Coder"));
// Output: 6

console.log(hero.lastIndexOf("Coder"));
// Output: 18

console.log(hero.indexOf("coder"));
// Output: -1 (case-sensitive ⚠️)

console.log(hero.includes("Coder"));
// Output: true


// =====================================
// 📌 slice() vs substring()
// =====================================

//                0123456
let newstring = "HeloDon";
//              -7-6-5-4-3-2-1

console.log(newstring.slice(1, 3));
// Output: el

console.log(newstring.substring(0, 3));
// Output: Hel

console.log(newstring.slice(-6, 5));
// Output: eloD

console.log(newstring.slice(-2, 4));
// Output: "" (empty string)


// =====================================
// 📌 replace & replaceAll
// =====================================

let str10 = "Hello Ji Kaise ho Ji";

console.log(str10.replace("Ji", "Money"));
// Output: Hello Money Kaise ho Ji

console.log(str10.replaceAll("Ji", "Money"));
// Output: Hello Money Kaise ho Money


// =====================================
// 📌 split()
// =====================================

let str11 = "Money! honey! sunny! funny";
console.log(str11.split("! "));
// Output: [ 'Money', 'honey', 'sunny', 'funny' ]


// =====================================
// 📌 trim()
// =====================================

let str12 = " hello ji ";

console.log(str12.length);
// Output: 10

console.log(str12.trim().length);
// Output: 8


// =====================================
// 📌 String Object (New Way ❌)
// =====================================

// Ye primitive string nahi hoti
// Ye String OBJECT hota hai

let lasteststring = new String("Hello Coder Army");

console.log(lasteststring);
// Output: [String: 'Hello Coder Army']

console.log(typeof lasteststring);
// Output: object



// Ultra-Important Interview Takeaways

// const object → values change ho sakti hain, reference nahi

// Strings → immutable

// Template literals (${}) → best & clean

// indexOf() → case-sensitive

// slice() → negative index allow

// substring() → negative ignore

// replace() → first match

// replaceAll() → all matches

// new String() → ❌ avoid (object ban jata hai)