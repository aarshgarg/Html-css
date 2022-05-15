console.log("Welcome to conversion and corecion");
// let res;
// //string to number
// res=Number("789");
// console.log(res);
// console.log(typeof res);

//Boolean to number
// let res1;
// res1=Number(false);
// console.log(res1);
// console.log(typeof res1);

// res = Number(' ')
// console.log(res); // 0
// res = Number('hello');
// console.log(res); // NaN
// res = Number(undefined);
// console.log(res); // NaN

//Boolean conversion

// let res2;
// res2=Boolean(455);
// console.log(res2);
// console.log(typeof res2);
// res2= Boolean(0); // false
// console.log(res2);
// res2= Boolean("hello"); // true
// console.log(res2);
// res2= Boolean(""); // false
// console.log(res2);

// let res3;
// let a= 90;
// res3=String(a);
// console.log(typeof a);
// console.log(res3);
// console.log( typeof res3);

// Implicit Conversion:-
// Sometimes JavaScript automatically converts one data type to another. This type of conversion is known as implicit conversion.

// Conversion To String:- When we add a number into a string, JavaScript converts the number to a string before concatenation. Here is an example:
// if we add the two number it add then like 6+5=11;

// let res4;
// res4='43'+56;
// console.log(res4);
// res4='45'+true;
// console.log(res4);
// res4=67+78;
// console.log(res4);



let myVar;
myVar=String(34);
console.log(myVar,(typeof myVar));

let boolVar;
boolVar=String(true);
console.log(boolVar,(typeof boolVar));

let date = String(new Date());
 console.log(date, (typeof date));

let arr =  String([1,2,3,4,5]);
 console.log(arr.length, (typeof arr));



 let num=899;
 console.log(num.toString);

 let sti=Number("4567d4");
 sti = Number(false);
//sti = Number([1,2,3,4,5,6,7,8,9]);
 console.log(sti,(typeof sti));

 let number = parseFloat('34.098');


 console.log(number.toFixed(2), (typeof number));


 //coercion

 let myStr=Number("900");
 let myNum=90;
 console.log(myStr+myNum,(typeof myNum),(typeof myStr));
