console.log("Hello World"); // will print Hello World on console

// variable (no data type mention required.)
var a = 10; // legacy
let b = 100;

let y = 'string';
let q = true;
let z = false;
let k = null;
let j; // j == undefined

// constant
const c = 1000;

// array
let array = ['a', 'b', 'c'];

// append to array
array.push('d');

//access to element of array
console.log(array[0]); // will print a

// declaring function
function sayHello(Name='kovox') // Name here is local variable(argument) of function sayHello.
{
    console.log("Hello " + Name);
}
// function can be member of object.

sayHello('nico'); // will print Hello nico.
sayHello(); // will print Hello kovox (default value of argument Name is kovox)

// object (struct, class)
const player = // object 'player' is constant
{
    Name : "kovox", // Name is not constant
    Points : 10,
    // ...
    sayHi: function(compName)
    {
        console.log(Name + "say hi to " + compName + "!");
    }
};

//access to element of array
console.log(player.Name); // will print kovox on console.
console.log(player["Name"]); // will do the same.

// assign object member value
player.Name = "nico";
console.log(player.Name);

// append to object
player.lastName = 'k';
console.log (player.lastName);
// console.log -> console is an object declared somewhere. Javascript has objects that already created.
// array is an object as well. 

// calling function in object
player.sayHi("kovox"); // will print nico say hi to kovox!

// functions that return values
function calculateKrAge(ageOfForeigner)
{
    return ageOfForeigner+2;
}

const age = 21
const krAge = calculateKrAge(age);

// type casting
const ageOfKovox = prompt("How old are you?"); // will show prompt window to browser
console.log(typeof(ageOfKovox)); // will print string
parseInt(ageOfKovox); // if parseInt uncastable-to-number value, the result will be NaN(Not A Number)
console.log(typeof(ageOfKovox)); // will print number (int)

// conditional (same as C)
if (isNaN(ageOfKovox))
{
    console.log("Please write a number.");
}
else // can use else if
{
    console.log("your age is " + ageOfKovox);
}
// logical operator is same as C