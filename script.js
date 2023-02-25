// Assignment Code
// set variable for number, letter upper and lower, and special characters
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var specialChars = '!@#$%&/[](){}=+,.?;:^-_*';
var passPass = ''

// setup way for user to interact
function maybe() {
  var length = 
  parseInt(
    prompt('How long would you like your password?')
    );
  
    if (isNaN(length)) {
      alert('Password has to be a number.');
      return null;
    }
  // setup how many characters they can and can't have
    if (length < 8){
    alert('Password has to be more than 8 charaters.');
    return null;
  }

    if (length > 128) {
    alert('Password has to be less than 128 characters.');
    return null;
  }

  // what to include in the password lowercase, uppercase, number, and special characters
  var lower = confirm('Do you want lower case letters?');

  var upper = confirm('Do you want upper case leters?');
   
  var specChars = confirm('Do you want special characters?');

  var num = confirm('Do you want numbers?');

  //TODO (low)
  //if all of the above values are false. The return null
  if (
    lower === false && 
    upper === false && 
    specChars === false && 
    num === false) {
    alert('You have to pick one!');
    return null;
  }

  var confirmArr = {
    length: length,
    lower: lower,
    upper: upper,
    specChars: specChars,
    num: num,
  };
  return confirmArr;
}
  // create a function for the math
function randRan(arr){
  for (var i =0; i < length; i++) 
    var rand = Math.floor(Math.random() * confirmArr.length);
    var randEle = confirmArr[rand];
  
  return randEle;
  //push conditials concatinating randomizing
}

//need to verify
var passMaybe;
function generatePassword() {
  passMaybe = maybe()
  if (lowerCase) {
    var verifiedLower = false;
    for (i = 0; i < length; i++) {
      var poissibleLower = randRan(poissibleLower);
      if (
        possibleLower == "a" ||
        possibleLower == "b" ||
        possibleLower == "c" ||
        possibleLower == "d" ||
        possibleLower == "e" ||
        possibleLower == "f" ||
        possibleLower == "g" ||
        possibleLower == "h" ||
        possibleLower == "i" ||
        possibleLower == "j" ||
        possibleLower == "k" ||
        possibleLower == "l" ||
        possibleLower == "m" ||
        possibleLower == "n" ||
        possibleLower == "o" ||
        possibleLower == "p" ||
        possibleLower == "q" ||
        possibleLower == "r" ||
        possibleLower == "s" ||
        possibleLower == "t" ||
        possibleLower == "u" ||
        possibleLower == "v" ||
        possibleLower == "w" ||
        possibleLower == "x" ||
        possibleLower == "y" ||
        possibleLower == "z"
      ) {
        verifiedLower = true;
      }
    }
    if (verifiedLower === false) {
      generatePassword();
    }
  }    
  if (upperCase) {
    var verifiedUpper = false;
    for (i = 0; i < length; i++) {
      var poissibleUpper = randRan(poissibleUpper);
      if (
        poissibleUpper == "A" ||
        poissibleUpper == "B" ||
        poissibleUpper == "C" ||
        poissibleUpper == "D" ||
        poissibleUpper == "E" ||
        poissibleUpper == "F" ||
        poissibleUpper == "G" ||
        poissibleUpper == "H" ||
        poissibleUpper == "I" ||
        poissibleUpper == "J" ||
        poissibleUpper == "K" ||
        poissibleUpper == "L" ||
        poissibleUpper == "M" ||
        poissibleUpper == "N" ||
        poissibleUpper == "O" ||
        poissibleUpper == "P" ||
        poissibleUpper == "Q" ||
        poissibleUpper == "R" ||
        poissibleUpper == "S" ||
        poissibleUpper == "T" ||
        poissibleUpper == "U" ||
        poissibleUpper == "V" ||
        poissibleUpper == "W" ||
        poissibleUpper == "X" ||
        poissibleUpper == "Y" ||
        poissibleUpper == "Z"
      ) {
        verifiedUpper = true;
      }
    }
    if (verifiedUpper === false) {
      generatePassword();
    }
    if (number) {
      var verifiedNumber = false;
      for (i = 0; i < length; i++) {
        var poissibleNumber = randRan(poissibleNumber);
        if (
          poissibleNumber == "0" ||
          poissibleNumber == "1" ||
          poissibleNumber == "2" ||
          poissibleNumber == "3" ||
          poissibleNumber == "4" ||
          poissibleNumber == "5" ||
          poissibleNumber == "6" ||
          poissibleNumber == "7" ||
          poissibleNumber == "8" ||
          poissibleNumber == "9"
        ) {
          verifiedNumber = true;
        }
      }
      if (verifiedNumber === false) {
        generatePassword();
      }
      if (specialChars) {
        var verifiedSpecialChars = false;
        for (i = 0; i < length; i++) {
          var poissibleSpecialChars = randRan(poissibleSpecialChars);
          if (
            poissibleSpecialChars == "!" ||
            poissibleSpecialChars == "@" ||
            poissibleSpecialChars == "#" ||
            poissibleSpecialChars == "$" ||
            poissibleSpecialChars == "&" ||
            poissibleSpecialChars == "/" ||
            poissibleSpecialChars == "(" ||
            poissibleSpecialChars == ")" ||
            poissibleSpecialChars == "{" ||
            poissibleSpecialChars == "}" ||
            poissibleSpecialChars == "=" ||
            poissibleSpecialChars == "+" ||
            poissibleSpecialChars == "." ||
            poissibleSpecialChars == "?" ||
            poissibleSpecialChars == ";" ||
            poissibleSpecialChars == ":" ||
            poissibleSpecialChars == "^" ||
            poissibleSpecialChars == "-" ||
            poissibleSpecialChars == "_" ||
            poissibleSpecialChars == "*"
          ) {
            verifiedSpecialChars = true;
          }
        }
        if (verifiedSpecialChars === false) {
          generatePassword();
        }
      }
      return passMaybe;
    }
  }
}

/*document.getElementById('generate').addEventListener('click', () => {
  maybe()
  var newPassword = generatePassword();
  document.getElementById('password').innerHTML = newPassword
})*/

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);