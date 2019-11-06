let lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
let upperCase = ["ABCDEFGHIJKLMNOPQRSYUVWXYZ"];
let ranNum = ["0123456789"];
let specChar = ["!", "#$%&*+/<=>?@^_~"];
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
     passwordArray = passwordArray + upperCase;
    } 
    if (lowerUser === true) {
     passwordArray = passwordArray + lowerCase;
    }
    if (ranUserNum === true) {
     passwordArray = passwordArray + ranNum;
    }
    if (specCharUser === true) {
     passwordArray = passwordArray + specChar;
    }

    for (i = 0; i < userNum; i++) {
       password += passwordArray[Math.floor(Math.random() * passwordArray.length)];
    }

    document.getElementById("password").innerHTML = password;
}

function copyClip() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
  
document.getElementById("reset").onclick = function resetForm() {
    document.getElementById("password").innerHTML = "";
    passwordArray = [""];
    password = [""];
 };