// Write your code here!
let removeMainFalan = document.getElementById('main');
removeMainFalan.remove();

let newHeader = document.createElement("h1")
let idFalan = document.createAttribute("id")
idFalan.value = "victory"
newHeader.setAttributeNode(idFalan);
document.body.appendChild(newHeader);
newHeader.innerHTML = "Ceyvun is the champion";