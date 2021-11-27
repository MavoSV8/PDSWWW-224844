
var validateWorker = new Worker('./validate_one_pesel.js');
var showAllWorker = new Worker('./show_all_pesels.js');
var findValidWorker = new Worker('./find_valid_pesels.js');

document.getElementById("validatePesel").addEventListener("click",validate);
document.getElementById("showAllPesels").addEventListener("click",showAll);
document.getElementById("findValidPesels").addEventListener("click",findAll);

function validate(){
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var restOfPesel = document.getElementById("restPesel").value;
    validateWorker.postMessage([year,month,day,restOfPesel]);

}

function showAll(){
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    showAllWorker.postMessage([year,month,day]);

}

function findAll(){
    var restOfPesel = document.getElementById("restPesel").value;
    findValidWorker.postMessage(restOfPesel)

}

validateWorker.addEventListener('message',function (e){
    document.getElementById("resultDiv").innerHTML = e.data;
})

showAllWorker.addEventListener('message',function (e){
    document.getElementById("resultDiv").innerHTML = e.data;
})

findValidWorker.addEventListener('message',function (e){
    document.getElementById("resultDiv").innerHTML = e.data;
})