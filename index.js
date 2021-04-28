// Write your code here!

let main = document.body.querySelector("main#main");
main.remove();

//document.createElement("h1");
//document.body.appendChild("h1");
//document.querySelector("h1").setAttribute("id", "victory");
//let newHeader = document.body.querySelector("h1");


document.body.innerHTML = "<h1 id='victory'>Ali is the champion</h1>";
let newHeader = document.getElementById("victory");
