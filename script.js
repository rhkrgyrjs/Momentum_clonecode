// JS interection with HTML elements (pre-declared objects related with HTML)

// document : an object that refers HTML text.

console.log(document);
console.log(document.title);

document.title =  prompt("type title you want");

console.log(document.body);

// grab <h1> (up for grasp)

console.log(document.getElementById("toGrab")); 
// getElementById returns an object that contains the tag's attributes.
console.log(document.getElementById("toGrab").autofocus); // will print true (due to the h1 tag in index.html file has autofocus attribute.)

toGrab.innerText = "got you!"; // html tags can be modified with JS. (with tag's id)
// all tags in HTML is considered an object in JS


const hellos = document.getElementsByClassName("hi"); // getElementsByClassName returns an array (object array)

console.log(hellos);

console.log(document.getElementsByTagName("h1"));