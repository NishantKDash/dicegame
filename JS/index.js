var rand1=Math.floor(Math.random()*6+1);
var rand2=Math.floor(Math.random()*6+1);
switch (rand1) {
  case 1:
  document.querySelector(".img1").setAttribute("src","Images/dice1.png");

    break;
    case 2:
    document.querySelector(".img1").setAttribute("src","Images/dice2.png");
    break;
    case 3:
    document.querySelector(".img1").setAttribute("src","Images/dice3.png");
    break;
    case 4:
    document.querySelector(".img1").setAttribute("src","Images/dice4.png");
    break;
    case 5:
    document.querySelector(".img1").setAttribute("src","Images/dice5.png");
    break;
    case 6:
    document.querySelector(".img1").setAttribute("src","Images/dice6.png");
    break;
  default:
  document.querySelector(".img1").setAttribute("src","Images/dice4.png");

}
switch (rand2) {
  case 1:
  document.querySelector(".img2").setAttribute("src","Images/dice1.png");

    break;
    case 2:
    document.querySelector(".img2").setAttribute("src","Images/dice2.png");
    break;
    case 3:
    document.querySelector(".img2").setAttribute("src","Images/dice3.png");
    break;
    case 4:
    document.querySelector(".img2").setAttribute("src","Images/dice4.png");
    break;
    case 5:
    document.querySelector(".img2").setAttribute("src","Images/dice5.png");
    break;
    case 6:
    document.querySelector(".img2").setAttribute("src","Images/dice6.png");
    break;
  default:
  document.querySelector(".img2").setAttribute("src","Images/dice4.png");

}
if(rand1>rand2){
  document.querySelector("h1").innerText="🚩 Player 1 wins";
}
else{
  document.querySelector("h1").innerText="🚩 Player 2 wins";
}
if(rand1==rand2){
  document.querySelector("h1").innerText="DRAW";
}
