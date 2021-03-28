console.log("Hi from JS");
const colors =["green","pink","rgba(133,122,200)","#f15025","yellow","brown","blue","purple"]
const btn=document.getElementById("btn");

const color=document.querySelector(".color")
btn.addEventListener("click",function(){
    //get random number between 0-3
    const randomNumber=getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor= colors[randomNumber];
    document.getElementById("colorId").style.color= colors[randomNumber]  ;
    color.textContent= colors[randomNumber]
})
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}