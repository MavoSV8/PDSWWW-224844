

document.getElementById("showAllPesels").addEventListener("click",showAllPesels);

function showAllPesels(){
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var fiveDigits;
    var PESEL = "";
    var PESELarray = [];
    for(let i = 0; i<100000;i++){
        if(i<10){
        fiveDigits = '0000' + i;
        }
        else if(i>=10 && i<100){
            fiveDigits = '000' + i;
        }
        else if(i>=100 && i<1000){
            fiveDigits = '00' + i;
        }
        else if(i>=1000 && i<10000)
        {
            fiveDigits = '0' + i;
        }
        else if(i>=10000 && i<100000){
            fiveDigits = i.toString();
        }
        PESEL = year[2] + year[3] + month + day + fiveDigits;
        let checksum;
        checksum = PESEL[0] * 1 + PESEL[1] * 3 + PESEL[2] * 7 + PESEL[3] * 9 + PESEL[4] * 1 + PESEL[5] * 3 + PESEL[6] * 7
            + PESEL[7] * 9 + PESEL[8] * 1 + PESEL[9] * 3;
        checksum = (checksum % 10);
        checksum = 10 - checksum;
        if(checksum === 10)
        {
            checksum = 0;
        }

        if(PESEL[10] == checksum){
            PESELarray.push(PESEL);
        }
    }
    document.getElementById("resultDiv").innerHTML = PESELarray;
}