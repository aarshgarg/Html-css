console.log('we are in tut7.js and lets discuss about arrays')

// let age = [33,55,67,18]
// let s_age= age.sort(age)
// console.log(s_age);

let arr2=[56,78,90]
console.log(arr2.length);

let arr3=["Mark", "John", "Jonas", "Jack"];
let std=arr3.indexOf('John');
console.log(std);

let marks = [34, 23, 24, 93 ,73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr=new Array(87,54,6,76,'Apple');
console.log(arr);
console.log(fruits[2]);
console.log(Array.isArray(marks));

arr[0] = 'harry';
console.log(arr);

let value=marks.indexOf(24);
console.log(value);

marks.push(678);
marks.unshift(890);
// marks.pop();
marks.reverse();
// It means that we delete the elements from pos 2 and delete the next 3 elements 
marks.splice(2,3);

console.log(marks);

let marks2=[3,56,77,8]
marks=marks.concat(marks2);
console.log(marks);

let myobj = {
    'first name': 'harry', 
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1,5,3,6]
}

console.log(myobj);
console.log(myobj.channel);
console.log(myobj['channel']);





