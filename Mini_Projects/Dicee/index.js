var randomNumber1=Math.floor(Math.random()*6)+1;// dice 1-6

var randomDiceImg1="dice"+randomNumber1+".png";//diceImg 1-6
var randomImageSource="images/"+randomDiceImg1; 

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImg2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2)
{
document.querySelector("h1").innerHTML="Player 1 Won ";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 Won ";
}
else {
    document.querySelector("h1").innerHTML="woow. Draw!  ";
}
