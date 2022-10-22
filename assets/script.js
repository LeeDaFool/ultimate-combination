// Assignment code here

// Password Criteria and length
var passLength = []
var fullChars = {
  charsetAbcLower: "abcdefghijklmnopqrstuvwxyz",
  charsetAbcUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  charsetNum: "0123456789",
  charsetSym: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
};

document.querySelector('#generate').addEventListener('click', userChoice);

// When generate password click user will be ask for the criteria of their password
function userChoice() {
  // prompt user of the length of the password they want
    var firstCriteria = prompt("Please choose the length of your password between 8-128:");
    if(firstCriteria < 8 || firstCriteria > 128) {
      alert("Try again");
      userChoice();
    } else {
      passLength = firstCriteria;
        let generateString = "";
        // user will confirm whether or not to include certain criteria
        var secondCriteria = confirm("Include lowercase?");
        var thirdCriteria = confirm("Include uppercase?");
        var fourthCriteria = confirm("Include number?");
        var lastCriteria = confirm("Include special characters?");
        // should the following criteria be added to a string
        if(secondCriteria === true) {
          generateString = fullChars.charsetAbcLower;
        }
        if(thirdCriteria === true) {
          generateString += fullChars.charsetAbcUpper;
        }
        if(fourthCriteria === true) {
          generateString += fullChars.charsetNum;
        }
        if(lastCriteria === true) {
         generateString += fullChars.charsetSym;
        }
        let results = generateString;
        let emptyString = "";
        // randomly selecting characters of the string created from the user preference
        while (emptyString.length < passLength) {
          emptyString += results[Math.floor(Math.random() * results.length)]
        }
        // showing user of the password they created
        alert(emptyString);
    }
  };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// var userChoice = window.prompt("How long will the password be?");



// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
