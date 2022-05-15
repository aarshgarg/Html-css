console.log('Welcome to the primitive and refrence datatype');
// Primitive datatypes
//string
let name="Aarsh";
console.log("My name is " + name);
console.log("Data type of " + (typeof name));

// numbers
let marks = 34.4;
console.log("Data type is " + (typeof marks));

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

let nullVar = null;
console.log("Data type of " + (typeof nullVar));


// Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));


// Refrence datatype
//Arrays

let arr1=[56,76,22,"string",false,45.5];
console.log(arr1);
//console.log("Print the array " + arr1);
console.log("Data type of " + (typeof arr1));

//Objects
let  stMarks={
    Aarsh:90,
    Shubham:78,
    Harshita:76
}

console.log("Print the Studnets marks" );
console.log(stMarks);
console.log("Data type of the object " + (typeof stMarks));

//functions

function findName()
{

}

console.log("Data type of the function " + (typeof findName));

//Dates

let date = new Date();
console.log( typeof date);
