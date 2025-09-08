let name = "Tarek Ahmed";
let age = 26;
let isStudent = false;
document.writeln("Name: " + name);
document.writeln("<br> Age: " + age);
document.writeln("<br> Is Student: " + isStudent);

 
 
document.writeln("<br>");

let x = 20;
let y = 30;
document.writeln("<br> x + y = " + (x + y));
document.writeln("<br> y - x = " + (x - y));
document.writeln("<br> x * y = " + (x * y));
document.writeln("<br> x / y = " + (x / y));
document.writeln("<br> x % y = " + (x % y));


document.writeln("<br>");
document.writeln("<br>");


let fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Grapes", "Strawberry"];
document.writeln("fruits: (Frist and Last)" + "<br>" + [fruits[0]] + "<br>" + [fruits[6]]);

document.writeln("<br>");
document.writeln("<br>");

document.writeln("Length:" + " " + fruits.length);

document.writeln("<br>");
document.writeln("<br>");

document.writeln("fruits:" + " " + fruits);

fruits.push("Kiwi");

document.writeln("<br>");
document.writeln("<br>");

document.writeln("After Push:" + " " + fruits);

document.writeln("<br>");
document.writeln("<br>");

document.writeln("length:" + " " + fruits.length);

fruits.shift();

document.writeln("<br>");
document.writeln("<br>");

document.writeln("After Shift:" + " " + fruits);

document.writeln("<br>");
document.writeln("<br>");

document.writeln("length:" + " " + fruits.length);

document.writeln("<br>");
document.writeln("<br>");

let person = {firstName: "Tarek", lastName: "Ahmed", age: 26, 
    subjects: "Computer Science , Software Engineering , Information Technology" , isStudent: false};


document.writeln("person:" + "<br>" + "First Name: " + person.firstName + "<br>" 
+ "Last Name: " + person.lastName + "<br>" 
+ "Age: " + person.age + "<br>" 
+ "subjects: " + person.subjects + "<br>" 
+ "Is Student: " + person.isStudent);

person.Is_Graduated = true;

document.writeln("<br>");
document.writeln("<br>");

document.writeln(person.firstName + " " + person.lastName + " is Graduated: " + person.Is_Graduated);

document.writeln("<br>");
document.writeln("<br>");





     

