
var game = {
  zdobyte : 0,
  zycia : 5,
}

let country;
 // for (var i = 0; i < data[0]['country'].length; i += 1) {
 //   console.log(data[0]['country'][i]);
 //  }

startGame("gamestart");
//addElement("wrap");
//LISTENERS


document.getElementById("start").addEventListener("click",playGame);
document.getElementById("autor").addEventListener("click", showAuthor);
document.getElementById("close").addEventListener("click", closeAuthor);
document.getElementById("sprawdz").addEventListener("click", checkLetters);
//FUNKCJE

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
    return data[getRandomInt(0, data.length)]['country'];
}

function playGame(){
  document.getElementById("gamestart").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("letters").style.display = "block";
  country = drawCountry();
  //country = country.replace(/[^a-zA-Z]/g, "");
  console.log(country);

  for (let i = 0;i < country.length;i++){
      let newDiv = document.createElement("div");
      newDiv.className = country[i].toLowerCase();
      newDiv.innerHTML = country[i];
      newDiv.style.color = "aqua";
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
    if (country.toLowerCase().includes(letter) && !letter.match(/[^a-zA-Z]/g)) {
        let letters = document.getElementsByClassName(letter);
        for(let i = 0;i<letters.length;i++){
            letters[i].style['color'] = "black";
        }

    }
    else {
        game.zycia--;
    }
    if(game.zycia === 0){

    }

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
