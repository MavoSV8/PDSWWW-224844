
var game = {
  zdobyte : 0,
  zycia : 5,
}

function drawCountry(){
  var country = data[getRandomInt(0,data.length)]['country'];
  return country;
}
var drawnCountry = drawCountry();
console.log(drawnCountry);
var elem = document.getElementById("panstwa");
elem.innerHTML = drawnCountry;



 for (var i = 0; i < data[0]['country'].length; i += 1) {
   console.log(data[0]['country'][i]);
  }


addElement("wrap");
//LISTENERS

document.getElementById("sprawdz").addEventListener("click", Sprawdz_Litery);
console.log(game.zycia);


//FUNKCJE
function Sprawdz_Litery(){
  var liter = document.getElementById("wpisz_litere").value;
  console.log(liter);
  console.log(getRandomInt(10,20));
}
function StartGame(starterDiv,autorDiv){
  startDiv = document.createElement("span");
  authorDiv = document.getElementById(gameDiv);
  document.body.insertBefore(newDiv, my_div);

  newDiv2 = document.createElement("span");
  newDiv2.innerHTML = "jasiokotek2";
  document.body.insertBefore(newDiv2, my_div.nextSibling);

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
