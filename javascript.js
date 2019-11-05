let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "Y", "U", "V", "W", "X", "Y", "Z"];
let ranNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specChar = ["!", "#", "$", "%", "&", "*", "+", "/", "<", "=", ">", "?", "@", "^", "_", "~"];

function ranPass() {
    let numChar = prompt("How many characters do you want? (min of 8)");
    console.log(numChar);
    let upperUser = confirm("Do you want UPPER CASE letters?");
    console.log(upperUser);
    let lowerUser = confirm("Do you want lower case letters?");
    console.log(lowerUser);
    let ranUserNum = confirm("Do you want numbers?");
    console.log(ranUserNum);
    let specCharUser = confirm("Do you want any special characters?");  
    console.log(specCharUser);  

    
}
