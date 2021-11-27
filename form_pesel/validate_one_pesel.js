




//document.getElementById("validatePesel").addEventListener("click",validatePesel);

this.addEventListener("message",validatePesel);
function validatePesel(e){

    var year = e.data[0];
    var month = e.data[1];
    var day = e.data[2];
    var restOfPesel = e.data[3];
    var PESEL = year[2] + year[3] + month + day + restOfPesel;
    //document.write(PESEL);
    if (calculateChecksum(PESEL) == PESEL[10])
    {
        this.postMessage("valid");
        //this.close();
    }
    else{
        this.postMessage("invalid");
        //this.close();
    }



}

function calculateChecksum(pesel){
    let checksum;
    checksum = pesel[0] * 1 + pesel[1] * 3 + pesel[2] * 7 + pesel[3] * 9 + pesel[4] * 1 + pesel[5] * 3 + pesel[6] * 7
    + pesel[7] * 9 + pesel[8] * 1 + pesel[9] * 3;
    checksum = (checksum % 10);
    checksum = 10 - checksum;
    if(checksum === 10)
    {
        checksum = 0;
    }

    return checksum;
}