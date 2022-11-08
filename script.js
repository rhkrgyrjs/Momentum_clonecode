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

const querysel = document.querySelector(".hello h1"); // querySelector allows search an element by css style notation (CSS selector)
// querySelector will get h1 element in class hello
// querySelector will return 'an' element. if there's many conforming element, it will return the first one.
// querySelectorAll will return array of conforming elements.

console.log(querysel);


// events (listening)

const color = document.querySelector("div.colorModi h1");

console.dir(color);

color.style.color = "blue";

color.addEventListener("click", handleColorClick); // listens event, end the event happens, call the function(2nd argument is name of function to run)
// dont type () when call addEventListener. if type (), it calls function 
color.addEventListener("mouseenter", handleColorMouseEnter);

color.onmouseleave = handleColorMouseLeave; // assigning function to event can be done like this.

// and event listener can be removed by calling removeEventListener

function handleColorClick()
{
    console.log("colorModi line was clicked.. now its turning red");
    color.textContent = "now im red"
    color.style.color = "red";
}

function handleColorMouseEnter()
{
    console.log("mouse is touching colorModi");
    color.textContent = "something is on me..";
    color.style.color = "green"
}

function handleColorMouseLeave()
{
    console.log("mouse leaved.");
    color.textContent = "its off";
    color.style.color = "blue";
}

window.addEventListener("resize", handleWindowResize); // window is an object (like document). 

function handleWindowResize()
{
    document.body.style.backgroundColor = "tomato";
    console.log("window resizing")
}

window.addEventListener("copy", handleWindowCopy);

function handleWindowCopy()
{
    alert("copier!");
}

window.addEventListener("offline", handleWindowOffline);

function handleWindowOffline()
{
    alert("no wifi");
}

window.addEventListener("online", handleWindowOnline);

function handleWindowOnline()
{
    alert("online");
}

