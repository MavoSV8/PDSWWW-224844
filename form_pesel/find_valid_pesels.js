
document.getElementById("findValidPesels").addEventListener("click",findAllPesels);

function findAllPesels(){
    var year;
    var day;
    var month;
    var fiveDigits = document.getElementById("restPesel").value;
    var startDate = new Date(1930,0,1);
    var endDate = new Date(2051,0,1);
    var PESEL = "";
    var PESELarray = [];

    while(startDate <= endDate) {

        year = startDate.getFullYear().toString();

        day = startDate.getDate();
        if (day <10){
            day = '0' + day.toString();
        }
        month = startDate.getMonth() + 1
        if(year >= 2000){
            month = (month + 20).toString();
        }
        if (month <10){
            month = '0' + month.toString();
        }
        // console.log(year);
        // console.log(month);
        // console.log(day);
        // console.log("-----------------------------------");
        PESEL = year[2] + year[3] + month + day + fiveDigits;
        let checksum;
        checksum = PESEL[0] * 1 + PESEL[1] * 3 + PESEL[2] * 7 + PESEL[3] * 9 + PESEL[4] * 1 + PESEL[5] * 3 + PESEL[6] * 7
            + PESEL[7] * 9 + PESEL[8] * 1 + PESEL[9] * 3;
        checksum = (checksum % 10);
        checksum = 10 - checksum;
        if (checksum === 10) {
            checksum = 0;
        }
        console.log(PESEL);
        if (PESEL[10] == checksum) {
            PESELarray.push(PESEL);
        }
        var newDate = startDate.setDate(startDate.getDate() + 1);
        startDate = new Date(newDate);

    }
    document.getElementById("resultDiv").innerHTML = PESELarray;
}
