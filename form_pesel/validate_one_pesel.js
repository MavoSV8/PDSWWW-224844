




document.getElementById("validatePesel").addEventListener("click",validatePesel);
function validatePesel(){
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var restOfPesel = document.getElementById("restPesel").value;
    var PESEL = year[2] + year[3] + month + day + restOfPesel;
    //document.write(PESEL);
    if (calculateChecksum(PESEL) == PESEL[10])
    {
        document.write("true");
    }
    else{
        document.write("false");
    }



}

function calculateChecksum(pesel){
    let checksum;
    checksum = pesel[0] * 1 + pesel[1] * 3 + pesel[2] * 7 + pesel[3] * 9 + pesel[4] * 1 + pesel[5] * 3 + pesel[6] * 7
    + pesel[7] * 9 + pesel[8] * 1 + pesel[9] * 3;
    if(checksum === 10)
    {
        checksum = 0;
    }
    else {
        checksum = (checksum % 10);
        checksum = 10 - checksum;
    }
    return checksum;
}