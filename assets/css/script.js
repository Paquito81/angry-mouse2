// Assignment code here
// The lenght of the code
var lenghtConfirm;
var specialCharactersConfirm;
var numberCharactersConfirm; 
var upperCharactersConfirm; 
var lowerCharactersConfirm; 

//special characters
specialArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", ".", ",", "-", "+", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "~", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "["]
//number characters
digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
//lower case characters
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//upper case characters
upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var pickChoices;
//Add event listener to Generate button
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
    contra = generatePassword();
    document.getElementById("password").placeholder = contra;
});

//Time to generate a password

function generatePassword() {
   //users input
    lenghtConfirm = parseInt(prompt("How many characters would you like your password to contain? (8 - 128 characters"));

    if(!lenghtConfirm) {
        alert("Please add value");
    }else if (lenghtConfirm < 8 || lenghtConfirm > 128) {
        //User Validation
        //User starts input prompts
        lenghtConfirm = parseInt(prompt("Password lenght has to be between 8-128 characters. Please try again."));
    
    } else {
        // Once user is validated continue
        specialCharactersConfirm = confirm("Will this contain special character?");
        numberCharactersConfirm = confirm("Will this contain number characters?");
        upperCharactersConfirm = confirm("Will this contain upper case characters?");
        lowerCharactersConfirm = confirm("Will this contain lower case characters?");
    };
    // When choosing four negative options
   if (!specialCharactersConfirm && !numberCharactersConfirm && !upperCharactersConfirm && !lowerCharactersConfirm) {
       pickChoices = alert("You must choose a criteria!");
   }
   //when choosing one option
   else if (specialCharactersConfirm) {
       pickChoices = specialArr;
   }
   else if (numberCharactersConfirm) {
       pickChoices = digits;
   }
   else if (upperCharactersConfirm) {
       pickChoices = upperLetters;
   }
   else if (lowerCharactersConfirm) {
       pickChoices = letters;
   }
   //when choosing two options
   else if (lowerCharactersConfirm && specialCharactersConfirm) {
       pickChoices = letters.concat(specialArr);
   
    } else if (lowerCharactersConfirm && upperCharactersConfirm) {
       pickChoices = letters.concat(upperLetters);
   
    }else if (lowerCharactersConfirm && numberCharactersConfirm) {
       pickChoices = letters.concat(digits);
    
    }else if (numberCharactersConfirm && upperCharactersConfirm) {
       pickChoices = digits.concat(upperLetters);
    
    }else if (numberCharactersConfirm && specialCharactersConfirm) {
        pickChoices = digits.concat(specialArr);

    }else if (upperCharactersConfirm && specialCharactersConfirm) {
        pickChoices = upperLetters.concat(specialArr);
    }

    //when choosing three options
    else if (numberCharactersConfirm && specialCharactersConfirm && lowerCharactersConfirm) {
        pickChoices = digits.concat(specialArr, letters);

    }else if (numberCharactersConfirm && specialCharactersConfirm && upperCharactersConfirm) {
        pickChoices = digits.concat(specialArr, upperLetters);

    }else if (numberCharactersConfirm && lowerCharactersConfirm && upperCharactersConfirm) {
        pickChoices = digits.concat(letters, upperLetters);
    
    }else if (specialCharactersConfirm && lowerCharactersConfirm && upperCharactersConfirm) {
        pickChoices = specialArr.concat(letters, upperLetters);
    }

    //When choosing four options
    else if (numberCharactersConfirm && specialCharactersConfirm && lowerCharactersConfirm && upperCharactersConfirm) {
        pickChoices = digits.concat(specialArr, letters, upperLetters);
    }
}    

