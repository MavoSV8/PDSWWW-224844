
var game = {
  zdobyte : 0,
  zycia : 5,
}

 // for (var i = 0; i < data[0]['country'].length; i += 1) {
 //   console.log(data[0]['country'][i]);
 //  }

startGame("gamestart");
//addElement("wrap");
//LISTENERS

document.getElementById("sprawdz").addEventListener("click", Sprawdz_Litery);
document.getElementById("start").addEventListener("click",playGame);
document.getElementById("autor").addEventListener("click", showAuthor);
document.getElementById("close").addEventListener("click", closeAuthor);

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

function closeAuthor(){
  document.getElementById("gamestart").style.display = "block";
  document.getElementById("autorDiv").style.display = "none";
}
function drawCountry(){
  let country = data[getRandomInt(0,data.length)]['country'];
  return country;
}

function playGame(){
  document.getElementById("gamestart").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("letters").style.display = "block";
  let country = drawCountry();
  country = country.replace(/[^a-zA-Z ]/g, "");
  console.log(country);

  for (let i = 0;i < country.length;i++){
      let newDiv = document.createElement("span");
      newDiv.id = country[i];
      newDiv.innerHTML = country[i];
      newDiv.style.border = "black 1px solid";
      newDiv.style.width = "100px";
      newDiv.style.padding = "1px";
      newDiv.style.borderRadius = "10px";
      if (country[i] === " "){
        newDiv.style.backgroundColor = "red";
      }
      else{
        newDiv.style.backgroundColor = "aqua";
      }

      document.getElementById("letters").append(newDiv);
  }
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
