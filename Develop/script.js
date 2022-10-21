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
// var charactersCriteria = function() {
//   let generateString = "";
//   var secondCriteria = confirm("Include lowercase?");
//   var thirdCriteria = confirm("Include uppercase?");
//   var fourthCriteria = confirm("Include number?");
//   var lastCriteria = confirm("Include special characters?");
//   if(secondCriteria === true) {
//     generateString = fullChars.charsetAbcLower;
//   }
//   if(thirdCriteria === true) {
//     generateString += fullChars.charsetAbcUpper;
//   }
//   if(fourthCriteria === true) {
//     generateString += fullChars.charsetNum;
//   }
//   if(lastCriteria === true) {
//    generateString += fullChars.charsetSym;
//   }
//   let results = generateString;
//   console.log(results);
// };

document.querySelector('#generate').addEventListener('click', userChoice);

function userChoice() {
    var firstCriteria = prompt("Please choose the length of your password between 8-128:");
    if(firstCriteria < 8 || firstCriteria > 128) {
      alert("Try again");
      userChoice();
    } else {
      passLength = firstCriteria;
      console.log(passLength);
        let generateString = "";
        var secondCriteria = confirm("Include lowercase?");
        var thirdCriteria = confirm("Include uppercase?");
        var fourthCriteria = confirm("Include number?");
        var lastCriteria = confirm("Include special characters?");
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
        while (emptyString.length < passLength) {
          emptyString += results[Math.floor(Math.random() * results.length)]
        }
        alert(emptyString);
    }
  };
  
  
  // for(var i = 0; i < 4; i++) {
    
  // }
    // for(var i = 0; i < firstCriteria; i++) {
  // do {
  //   alert("Try again");
  //   confirm("Include lowercase?")
  // } while (secondCriteria === false);

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
