// Assignment code here
// The lenght of the code
var lenghtConfirm = 8; 
// special characters
var specialCharacterConfirm = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//Number characters
var numberCharacterConfirm = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Uppercase characters
var upperCaseConfirm = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//Lowercase haracters
var lowerCaseConfirm = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var generateBtn = document.querySelector("#generate");
//Added a Greeting
function generatePassword() {
   

// 1. Prompt the user for the password criteria
//    a. Password lenght 8 < 128
//    b. Lowercase, uppercase, numbers ,special characters
// 2. Validate the input.
// 3. Display the password to the page



    return "Generated password will go here!";
s
}

//Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

//Add event listener to Generate button
generateBtn.addEventListener("click", writePassword);

var num =["0", "1", "2"]

