console.log("javascript for the String");
    var myString="Javascript!!!";
    console.log(myString.charAt(8));

    var str1="Javascript";
    var str2= str1.concat("is" ,"Awesome");
    console.log(str2);

    var str1="Hi,You name is sam!";
    var str2=str1.indexOf("name");
    console.log(str2);

    var text="programming"
var mystr= text.slice(0,4)
console.log(mystr)

var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" "); 
console.log(txt);

let myVar ="Javascript programming";
let myVal=myVar.substring(0,10);
console.log(myVal);

var myString = 'JAVASCRIPT';
myString = myString.toLowerCase();
console.log(myString)

var myString = 'JAVASCRIPT';
myString = myString.toUpperCase();
console.log(myString)

var str = "Welcome to programming World!!";
str=str.search("World");
console.log(str);


const name="Aarsh";
const greeting="Good Morning ";
console.log(greeting +' '+ name);

let html;
html="<h1> this is heading</h1>"+
"<p> this is My para</p>";
console.log(html[1]);
console.log(html.slice(0,8));
console.log(html.substring(1,7));
console.log(html.split('>'))
console.log(html.indexOf("is"));
console.log(html.charAt(6));
console.log(html.replace('this','it'));
console.log(html.lastIndexOf('<'));
console.log(html.endsWith('hfehih'));
console.log(html.includes("djshi"));

// Template literals

let fruit1='Orange';
let fruit2='Mango';

let myhtml=` My ${name}<h1> this is heading</h1>
<p> you like ${fruit1} and ${fruit2}`;

document.body.innerHTML=myhtml; 