// Assignment code here
// var passLengthLow = 8;
// var passLengthHigh = 128;
var passLength = []
var fullChars = {
  charsetAbcLower: "abcdefghijklmnopqrstuvwxyz",
  charsetAbcUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  charsetNum: "0123456789",
  charsetSym: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
};
document.querySelector('#generate').addEventListener('click', userChoice);

function userChoice() {
    }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// var userChoice = window.prompt("How long will the password be?");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
