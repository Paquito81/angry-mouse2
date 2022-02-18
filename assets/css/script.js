// Assignment code here
// The lenght of the code
var lenghtConfirm = 8;
var assignConfirm = [];

// special characters
var specialCharacterConfirm = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//Number characters
var numberCharacterConfirm = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//Uppercase characters
var upperCharactersConfirm = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//Lowercase haracters
var lowerCharactersConfirm = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var generateBtn = document.querySelector("#generate");
//Added a Greeting

//Add event listener to Generate button
generateBtn.addEventListener("click", writePassword);

   

// 1. Prompt the user for the password criteria
//    a. Password lenght 8 < 128
//    b. Lowercase, uppercase, numbers ,special characters
// 2. Validate the input.
// 3. Display the password to the page



  
//Write password to the #password input

function writePassword() {
    var rightPrompts = getPrompts();
    var passwordText = document.querySelector("#password");

    if(rightPrompts) {
        var newPassword = generatePassword();
        passwordText.value = newPassword;
    }else {
        passwordText.value = "";
    }
}

//this is where the password will be generated
function generatePassword() {
    var password = "";
    for(var i =0; i < lenghtConfirm; i++) {
        var randomIndex = Math.floor(Math.random() * assingChoice.lenght);
        password = password = assignChoice[randomIndex];
    }
    return password;
}


function getPrompts() {
    assignConfirm = [];

    var lenghtConfirm = (prompt("How many characters would you like your password to contain? (8 - 128 characters"));

    if(isNaN(lenghtConfirm) || lenghtConfirm < 8 || lenghtConfirm > 128) {
        alert("Password lenght has to be between 8 - 128 characters. Please Try Again!");
        return false;
    } 

    if (confirm("Will this contain special characters?")) {
        assignConfirm = assignConfirm.concat(specialCharacterConfirm);
    }

    if (confirm("Will this contain number characters?")) {
        assignConfirm = assignConfirm.concat(numberCharacterConfirm);
    }

    if (confirm("Will this contain upper case characters?")) {
        assignConfirm = assignConfirm.concat(upperCharactersConfirm);
    }

    if (confirm("Will this contain lower case characters?")) {
        assignConfirm = assignConfirm.concat(lowerCharactersConfirm);
    }
    return true;

}