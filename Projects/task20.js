// ------- Task 1 --------

let studentName = "KRISHA";
const collageName = "AVPTI";
var age = 17;

console.log("Student Name:", studentName);
console.log("Collage Name:", collageName);
console.log("Age:", age);

// ------ Task 2 -------

console.log("----Task 2----");

let city = "Rajkot";
city = "Ahemdabad";

console.log("City:", city);

// -------- Task 3 -------

console.log("----Task 3----");

const country = "India";
console.log("Country:", country);

//country = "Korea";
//console.log(country);

// ------- Task 4 -------

console.log("----Task 4----");

var a = 25;
var b = 10;

console.log("Adition: ", a + b);
console.log("Subtraction: ", a - b);
console.log("Multiplication: ", a * b);
console.log("Division: ", a / b);
console.log("Modulus: ", a % b);

// ----- Task 5 -----
/*console.log("----Task 5----");
count = prompt("Enter Count:");

console.log("Intial Value:", count);
count ++;

console.log("After Count: ", count);
count --;

console.log("After Count--: ",count);
*/
// ----- Task 6 -----

console.log("----Task 6----");

var marks = 50;

marks += 10;
console.log("After += :", marks);

marks -= 5;
console.log("After -= :", marks);

marks *= 2;
console.log("After *= :", marks);

marks / 5;
console.log("After /:", marks);

// ----- Task 7 -----

console.log("----Task 7----");

var salary = 10000;
salary += 2000;

console.log("Updated Salary:", salary);

// ------ Task 8 ------

/*console.log("----Task 8----");

var x = prompt("Enter the Value of X:");
var y = prompt("Enter the Value of Y:");

console.log("Using ==", x == y);
console.log("Using !=", x != y);
console.log("Using >", x > y);
console.log("Using <", x < y);
console.log("Using >=", x >= y);
console.log("Using <=", x <= y);
*/

// --- Task 9 ---

console.log("----Task 9----");

var num1 = '10';
var num2 = 10;

console.log("Using ==", num1 == num2);
console.log("Using ===", num1 === num2);

// ---- Task 10 ----

console.log("----Task 10----");

let personage = 22;
let hasLicense = true;

let canDrive = personage >= 18 && hasLicense;

console.log("Can Drive:", canDrive);

// --- Task 11 ---

console.log("----Task 11----");

var isWeekend = false;
var isHoliday = true;

var officeClosed = isWeekend || isHoliday;

console.log("Office Closed: ", officeClosed);

// ----- Task 12 -----

console.log("----Task 12----");

var isLoggedIn = false;

console.log("Is Logged In:", isLoggedIn);
console.log("Is Logged Out:", !isLoggedIn);

// --- Task 13 ----

console.log("----Task 13----");

console.log("This is a Normal Message");
console.warn("This is Warning Message");
console.error("This is Error Message");

// ---- Task 14 ---- 

console.log("----Task 14----");

console.time("Test");

for (let i = 1; i <= 100000; i++) { }

console.timeEnd("Test");

// --- Task 15 ---

/*console.log("----Task 15----");

var students = [prompt("Enter Name of 1st student"), prompt("Enter Name of 2nd student"), prompt("Enter Name of 3rd student"),
prompt("Enter Name of 4th student"), prompt("Enter Name of 5th students")
];

console.table(students);
*/

// --- Task 16 ----

/*console.log("----Task 16----");

console.log("Message 1");
console.log("Message 2");

console.clear();
console.log("Console cleared !");
*/

// --- Task 17 ---

console.log("----Task 17----");

var element = document.getElementById("heading");

console.log(element);

// --- Task 18 ----

console.log("----Task 18----");

var paragraphs = document.getElementsByClassName("demo");

console.log(paragraphs);

// --- Task 19 --- 

console.log("----Task 19----");

let items = document.getElementsByTagName("li");
for (let i = 0; i < items.length; i++) {
    console.log(items[i].innerText);
}

// ---Task 20---

console.log("----Task 20----");

let heading = document.querySelector("#title");

heading.innerHTML = "<b>Hello JS</b>";

heading.innerText = "Hello JavaScript using innerText";

heading.textContent = "Hello JavaScript using textContent";

let paras = document.querySelectorAll(".demo1");

// Various typeof examples
console.log(typeof "Hello");   // string
console.log(typeof 100);       // number
console.log(typeof true);      // boolean
console.log(typeof {});        // object
console.log(typeof []);        // object
console.log(typeof undefined); // undefined