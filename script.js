// Assignment code here

var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "0123456789"
var sym = "!@#$%^&*"

submit.addEventListener("click", function(e){
    var characters = char;
    (num.checked) ? characters += num : '';
    (sym.checked) ? charachters += sym : '';
})
yourPassword.value = password(char.value, characters);
function password(characters) {
    var password ="";
    for(var i =0; i <= l; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
//select criteria to include in password
function password(characters) {
if (confirm("Select for lowercase.")) {
    txt = "You selected lowercase.";
} else (
    txt = "you opted out of lowercase.");

if (confirm("Select for uppercase.")) {
    txt = "You selected uppercase.";
} else (
    txt = "you opted out of uppercase.");

if (confirm("Select for numeric.")) {
    txt = "You selected numeric.";
} else (
    txt = "You opted out of numeric.");
if (confirm("Special Characters")) {
    txt = "You selected special characters.";
} else (
    txt = "You opted out of special characters");

//add password to textbox
document.getElementById("password").value = password;

window.alert("");



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}