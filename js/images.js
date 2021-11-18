//console.log("hello from script ");
const myButton =  document.querySelector('button');
const myImage = document.querySelector('.image');
const srcs = ['img/pilt1.jpg','img/pilt2.jpg','img/pilt3.jpg'];
//console.log(myButton)



let name ='Mcqueen on siin';

console.log(`Kachow sõbrake!, ${name} `)


myButton.addEventListener('click', changePic);
 
 var lastIndex = -1

function changePic() {
    let rnd = Math.floor(Math.random() * srcs.length);
    while (lastIndex === rnd){
        rnd = Math.floor(Math.random() * srcs.length);
    }
    lastIndex=rnd
    console.log(rnd);
    myImage.setAttribute('src', srcs[rnd])


}
