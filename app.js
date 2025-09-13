let b=document.querySelector("button");
 b.addEventListener("click",function(){
let h2=document.querySelector("h2");
let rc=ran();
h2.style.color=rc;
let d=document.querySelector("div");
d.style.backgroundColor=rc;

 });


 function ran(){
let green=(Math.floor(Math.random()*256));
let red=(Math.floor(Math.random()*256));
let blue=(Math.floor(Math.random()*256));


let col=`rgb(${red},${green},${blue})`;
return col;
 }

