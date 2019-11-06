let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "Y", "U", "V", "W", "X", "Y", "Z"];
let ranNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specChar = ["!", "#", "$", "%", "&", "*", "+", "/", "<", "=", ">", "?", "@", "^", "_", "~"];
let passwordArray = [""];
let password = [""];

function ranPass() {
    let numChar = prompt("How many characters do you want? (min of 8)");
    let userNum = parseInt(numChar);
    let upperUser = confirm("Do you want UPPER CASE letters?");
    let lowerUser = confirm("Do you want lower case letters?");
    let ranUserNum = confirm("Do you want numbers?");
    let specCharUser = confirm("Do you want any special characters?");    

    if (upperUser === true) {
     password = passwordArray + upperCase;
    } 
    if (lowerUser === true) {
     password = passwordArray + lowerCase;
    }
    if (ranUserNum === true) {
     password = passwordArray + ranNum;
    }
    if (specCharUser === true) {
     password = passwordArray + specChar;
    }

    for (i = 0; i <= userNum; i++) {
       let password = Math.floor(Math.random(password[i]));
        console.log(password);
    }
}
