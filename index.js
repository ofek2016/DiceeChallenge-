var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomNumber2 =Math.floor(Math.random() * 6)+1;

var img1="images/dice"+randomNumber1+".png";

var img2="images/dice"+randomNumber2+".png";
console.log(img1 , randomNumber1);

document.querySelector(".img1").setAttribute("src",img1);
document.querySelector(".img2").setAttribute("src",img2);

if (randomNumber1 >randomNumber2){
    document.querySelector("h1").innerHTML="🚩player 1 Win!";
}

if (randomNumber1 <randomNumber2){
    document.querySelector("h1").innerHTML="player 2 Win!🚩";
}

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="Drow!";
}