
var game = {
  zdobyte : 0,
  zycia : 5,
}


var drawnCountry = drawCountry();
console.log(drawnCountry);




 // for (var i = 0; i < data[0]['country'].length; i += 1) {
 //   console.log(data[0]['country'][i]);
 //  }

startGame("gamestart");
//addElement("wrap");
//LISTENERS

document.getElementById("sprawdz").addEventListener("click", Sprawdz_Litery);
document.getElementById("start").addEventListener("click",startGame);
document.getElementById("autor").addEventListener("click", showAuthor)


//FUNKCJE
function Sprawdz_Litery(){
  var liter = document.getElementById("wpisz_litere").value;
  console.log(liter);
  console.log(getRandomInt(10,20));
}
function startGame(starterDiv){

  var button1 = document.createElement("button");
  var button2 = document.createElement("button");
  button1.id = "start";
  button1.innerHTML = "Start";
  button1.style.width = "50px";
  button1.style.height = "20px";
  button1.style.margin = "25px";

  button2.id = "autor";
  button2.innerHTML = "Autor";
  button2.style.width = "50px";
  button2.style.height = "20px";
  button2.style.margin = "25px";

  document.getElementById("game").style.display = "none";
  document.getElementById(starterDiv).append(button1);
  document.getElementById(starterDiv).append(button2);

}
function showAuthor(){
  document.getElementById("gamestart").style.display = "none";
  document.getElementById("autorDiv").style.display = "block";
}
function drawCountry(){
  var country = data[getRandomInt(0,data.length)]['country'];
  return country;
}

function addElement(mydiv)
{
 
  newDiv = document.createElement("span");
  newDiv.innerHTML = "jasiokotek";

  my_div = document.getElementById(mydiv);
  document.body.insertBefore(newDiv, my_div);

  newDiv2 = document.createElement("span");
  newDiv2.innerHTML = "jasiokotek2";
  document.body.insertBefore(newDiv2, my_div.nextSibling);

  newDiv.classList.add("mystyle");  
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
