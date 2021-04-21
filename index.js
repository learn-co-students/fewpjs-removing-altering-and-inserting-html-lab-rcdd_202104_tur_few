// Write your code here!

let main = document.getElementById('main');
main.remove();

let element = document.querySelector('body');

for(let i = 0; i < 3; i++){
        let newHeader = document.createElement('h1');
        newHeader.setAttribute('id', 'victory');
        if (i == 2){
                newHeader.innerHTML = ("Belal is the champion").toString();
        }
        element.appendChild(newHeader);
}
