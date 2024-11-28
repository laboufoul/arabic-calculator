
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function split(){
    try{
        if (display.value.includes("*")) {
            const tokens = display.value.split("*"); 
            return tokens;
        }
        if (display.value.includes("-")) {
            const tokens = display.value.split("-"); 
            return tokens;

        }
        if (display.value.includes("+")) {
            const tokens = display.value.split("+"); 
            return tokens;

        }
        if (display.value.includes("/")) {
            const tokens = display.value.split("/"); 
            return tokens;
        }
    }
    catch(error){
        display.value = "Error";
    }
}

function arabicConvertOneDigit(value){
    if (value == '١'){
        return 1;
    }
    else if (value == '٢'){
        return 2;
    }
    else if (value == '٣'){
        return 3;
    }
    else if (value == '٤'){
        return 4;
    }
    else if (value == '٥'){
        return 5;
    }
    else if (value == '٦'){
        return 6;
    }
    else if (value == '٧'){
        return 7;
    }
    else if (value == '٨'){
        return 8;
    }
    else if (value == '٩'){
        return 9;
    }
    else {
        return 0;
    }
}

function englishConvertOneDigit(value){
    if (value == '1'){
        return '١';
    }
    else if (value == '2'){
        return '٢';
    }
    else if (value == '3'){
        return '٣';
    }
    else if (value == '4'){
        return '٤';
    }
    else if (value == '5'){
        return '٥';
    }
    else if (value == '6'){
        return '٦';
    }
    else if (value == '7'){
        return '٧';
    }
    else if (value == '8'){
        return '٨';
    }
    else if (value == '9'){
        return '٩';
    }
    else {
        return '٠';
    }
}

function convertResult(number){
    let numberString = String(number); //120
    let returnString = "";
    for (let i = 0; i < numberString.length; i++) {
        returnString += englishConvertOneDigit(numberString[i]);
    }
    return returnString;
}

function calculate(){
    try{
        if (display.value.includes("*")) {
            let tokens = split();
            let num1 = Number(arabicConvertOneDigit(tokens[0]));
            let num2 = Number(arabicConvertOneDigit(tokens[1]));
            let result = num1*num2;
            display.value = convertResult(result);
        }
        if (display.value.includes("-")) {
            let tokens = split();
            let num1 = Number(arabicConvertOneDigit(tokens[0]));
            let num2 = Number(arabicConvertOneDigit(tokens[1]));
            let result = num1-num2;
            display.value = convertResult(result);;

        }
        if (display.value.includes("+")) {
            let tokens = split();
            let num1 = Number(arabicConvertOneDigit(tokens[0]));
            let num2 = Number(arabicConvertOneDigit(tokens[1]));
            let result = num1+num2;
            display.value = convertResult(result);;

        }
        if (display.value.includes("/")) {
            let tokens = split();
            let num1 = Number(arabicConvertOneDigit(tokens[0]));
            let num2 = Number(arabicConvertOneDigit(tokens[1]));
            let result = num1/num2;
            display.value = convertResult(result);;
        }
    }
    catch(error){
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = ""; 
}