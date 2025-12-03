console.log("Scipt loaded!");

// Fundamental data types

const myString = "helloWorld";
let firstName ="Katelyn";
let age = 4;
let isEnrolled = true;
let major = undefined; 
// console.log(firstName, age);
// console.log(myString, major);

// Reassignment (no let)

firstName ="Killy"
console.log(firstName);

age = age + 1;
console.log(age);

// Essential Operations
age + 10;
age - 5;
age *3;
age % 4;


// Additional operations
 
console.log(Math.round(5.8));
console.log(Math.floor(5.8));
console.log(Math.ceil(5.2));

// Concatenation v. templates
let string1 = firstName + " is "+ age + " and major" + major ;
console.log(string1)

// String methods
console.log(string1.toUpperCase());;
console.log(string1.toLowerCase());;
console.log(string1.length);;
console.log(string1.slice(2,7));;
console.log(string1.indexOf("K"));;

// Comparison operators - true or false?
age = 10; //not comparasion
age == 10; //loose equality
age === 10; //strict equality
age > 5;
age !=5;
age !==5;

// Conditional statements;
// let userName="Ian";
// let age2= 17;
// if (userName == "Miles" && age2 == 17); {
//     console.log("Welcome, Spiderman");
// }  if (age2 > 17){
//     console.log("unauthorized!")
// } else {
//     console.log('welcome ${userName}');
// }

// functions

// Returns half the number if it can be halved; otherwise returns false
function getHalf (x){
    if (x % 2 === 0){
        return x / 2;
    } else {
        return false;
    
    }
}
console.log (getHalf(10));
console.log (getHalf(7));
a = getHalf(20);
console.log(a)

// Functions can alsobe written as arrows. Body of function doesn't change, just the signature.
const getHalf2 = (x)=>{
    if (x % 2 === 0){
        return x / 2;
    } else {
        return false;
    }
}
console.log (getHalf2(7));
// create an arrow function that doubles numbers
 const double = (x) => {
    return x*2;
 }

 console.log(double(5));


// takes a string and  crops first ten characters
const cropString = (x) =>{
    if (x.length <= 10){
        return x;
    } else{
        return x.substring(3,5 );
    }
    }
console.log(cropString("Mynameisiankilpatrick"));