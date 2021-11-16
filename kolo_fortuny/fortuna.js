
var game = {
  zdobyte : 0,
  zycia : 5,
}

let country;
let counter = 0;
let usedLetters = [];
 // for (var i = 0; i < data[0]['country'].length; i += 1) {
 //   console.log(data[0]['country'][i]);
 //  }
updateLives(game.zycia);
updatePoints(game.zdobyte);
startGame("gamestart");
//addElement("wrap");
//LISTENERS


document.getElementById("start").addEventListener("click",playGame);
document.getElementById("autor").addEventListener("click", showAuthor);
document.getElementById("close").addEventListener("click", closeAuthor);
document.getElementById("sprawdz").addEventListener("click", checkLetters);
//FUNKCJE

function startGame(starterDiv){

  let button1 = document.createElement("button");
  let button2 = document.createElement("button");
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
  document.getElementById("gameInfo").style.display = "none";
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
    return data[getRandomInt(0, data.length)]['country'];
}

function playGame(){
  document.getElementById("gamestart").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("letters").style.display = "block";
    document.getElementById("gameInfo").style.display = "block";
  country = drawCountry();
  //country = country.replace(/[^a-zA-Z]/g, "");
  console.log(country);

  for (let i = 0;i < country.length;i++){
      let newDiv = document.createElement("div");
      newDiv.className = country[i].toLowerCase();
      newDiv.style.color = "black";
      newDiv.id = "letterBox";
      if (country[i].match(/[^a-zA-Z]/g)){
        newDiv.style.backgroundColor = "red";
          newDiv.style.color = "red";
      }
      else{
        newDiv.style.backgroundColor = "aqua";
      }

      document.getElementById("letters").append(newDiv);
  }
}

function checkLetters(){
    let letter = document.getElementById("wpisz_litere").value;

    console.log(letter);
    letter = letter.toLowerCase();
    country = country.replace(/[^a-zA-Z]/g, "");
    console.log(country)
    if (country.toLowerCase().includes(letter) && !letter.match(/[^a-zA-Z]/g) && !usedLetters.includes(letter)) {
        let letters = document.getElementsByClassName(letter);
        for(let i = 0;i<letters.length;i++){
            letters[i].innerHTML = letter;
            counter++;
        }
        console.log(counter);
        usedLetters.push(letter);
    }
    else {
        game.zycia--;
        updateLives(game.zycia);
    }
    document.getElementById("wpisz_litere").value = null;
    if(game.zycia === 0){
        updateLives(game.zycia);
        if(alert("Przegrałeś")){

        }else{
            window.location.reload(true);
        }

    }
    if(counter >= country.length){
        let element = document.getElementById("letters");
        while (element.firstChild) {
            element.removeChild(element.lastChild);
        }
        usedLetters.length = 0;
        console.log(usedLetters);
        counter = 0;
        updateLives(game.zycia = game.zycia + 5);
        game.zdobyte++
        updatePoints(game.zdobyte);
        playGame();
    }

}

function updateLives(zycia){
    document.getElementById("lives").innerHTML = "Życia: " + zycia;
}

function updatePoints(punkty){
    document.getElementById("points").innerHTML = "Punkty: " + punkty;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
