//console.log("hello from script ");
const myButton =  document.querySelector('button');
const myBox = document.querySelector('.box');
const colors = ['red','green','blue','yellow'];
//console.log(myButton)



let name ='Mqcueen on siin';

console.log(`Terekest!, ${name} `)


myButton.addEventListener('click', changeColor);
 
 var lastIndex = -1

function changeColor() {
    let rnd = Math.floor(Math.random() * colors.length);
    while (lastIndex === rnd){
        rnd = Math.floor(Math.random() * colors.length);
    }
    lastIndex=rnd
    console.log(rnd);
    myBox.style.backgroundColor = colors[rnd];


}
