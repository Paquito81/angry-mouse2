// Assignment code here
// The lenght of the code
var lengthConfirm;
var specialCharactersConfirm;
var numberCharactersConfirm; 
var upperCharactersConfirm; 
var lowerCharactersConfirm; 

//special characters
specialArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", ".", ",", "-", "+", "/", "\:", "\;", "<", "=", ">", "?", "@", "~", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "["]
//number characters
digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
//lower case characters
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//upper case characters
upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var pickChoices = [];
//Add event listener to Generate button
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", generatePassword)

//Time to generate a password

function generatePassword() {
   //users input
    lengthConfirm = parseInt(prompt("How many characters would you like your password to contain? (8 - 128 characters"));

    if(!lengthConfirm) {
        alert("Please add value");
    }else if (lengthConfirm < 8 || lengthConfirm > 128) {
        //User Validation
        //User starts input prompts
        lengthConfirm = parseInt(prompt("Password lenght has to be between 8-128 characters. Please try again."));
    
    } 
        // Once user is validated continue
    specialCharactersConfirm = confirm("Will this contain special character?");
    numberCharactersConfirm = confirm("Will this contain number characters?");
    upperCharactersConfirm = confirm("Will this contain upper case characters?");
    lowerCharactersConfirm = confirm("Will this contain lower case characters?");
    
    // When choosing four negative options
   if (!specialCharactersConfirm && !numberCharactersConfirm && !upperCharactersConfirm && !lowerCharactersConfirm) {
       pickChoices = alert("You must choose a criteria!");
       return 
   }
   //when choosing one option
    else if (specialCharactersConfirm) {
       pickChoices = pickChoices.concat(specialArr);
       console.log(pickChoices)
   }
    else if (numberCharactersConfirm) {
       pickChoices = pickChoices.concat(digits);
       console.log(pickChoices)
   }
   else if (upperCharactersConfirm) {
       pickChoices = pickChoices.concat(upperLetters);
       console.log(pickChoices)
   }
    else if (lowerCharactersConfirm) {
       pickChoices = pickChoices.concat(letters);
       console.log(pickChoices)
   }
   
    console.log(pickChoices)
     var password = [];

    // Selection for all variables

   
      
    console.log(typeof lengthConfirm, lengthConfirm)
    for (var i = 0; i < lengthConfirm; i++) {
        var choice = pickChoices[Math.floor(Math.random() * pickChoices.length)];
        password.push(choice);
    console.log(password)
    }

    var ps = password.join("");
    UserInput(ps);
    return ps;

} 

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

