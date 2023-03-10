// initialize my variables

let firstNumber = 0, operator = '', oldnumber = 0;

function clickOnNumber( number ){

//     existing number = (existing number X 10) + number

    firstNumber = (firstNumber * 10) + number;

//     display the existing number

    document.getElementById('display').innerText = firstNumber;

    return;
}
