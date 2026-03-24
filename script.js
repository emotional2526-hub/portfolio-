// Typing Effect
const textArray = ["Frontend Developer", "AI Enthusiast", "Creative Coder"];
let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function type() {
if(charIndex < textArray[index].length){
typingElement.textContent += textArray[index].charAt(charIndex);
charIndex++;
setTimeout(type, 100);
}else{
setTimeout(erase, 1500);
}
}

function erase(){
if(charIndex > 0){
typingElement.textContent = textArray[index].substring(0, charIndex-1);
charIndex--;
setTimeout(erase, 50);
}else{
index = (index+1)%textArray.length;
setTimeout(type, 200);
}
}
type();

// Mouse Parallax
document.addEventListener("mousemove", e=>{
document.querySelector(".hero-image").style.transform =
`translate(${e.clientX*0.01}px,${e.clientY*0.01}px)`;
});

// Particles
tsParticles.load("particles-js",{
particles:{
number:{value:60},
size:{value:2},
move:{speed:1},
links:{enable:true,color:"#38bdf8"},
color:{value:"#a78bfa"}
}
});
