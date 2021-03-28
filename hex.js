const hex=["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"]
//#f15025
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener("click",function(){
   let hexColor ="#"
   for( let h=0;h<6;h++){
     let randomNumber=getRandomNumber()
     hexColor+=hex[randomNumber]
}
document.getElementById("colorId").style.color= hexColor  ;
color.textContent=hexColor;
document.body.style.backgroundColor=hexColor
})
function getRandomNumber(){
    return Math.floor(Math.random()*16);
}