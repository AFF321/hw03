// Assignment Code


var generateBtn = document.querySelector("#generate");
  function generatePassword(){
    var symbol = confirm("Do you want symbols?");
    var numbers = confirm("Do you want numbers?");
    var capword = confirm("Capital words?");
    var loweword = confirm("Lowercase words?");
    var amount = prompt("how many digits?");
    if (amount < 8){
      alert("must be larger than 8 letters")
      return 
    }
    if (amount > 128){
      alert("must be less than 128 letters")
      return
    }
    if (symbol == true && numbers == true && capword == true && loweword ==true){
    var length = amount,
     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
     retVal = " ";
     for (var i = 0, n =charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
     }
     return retVal
    };
    if (symbol == true && numbers ==true &&capword == true && loweword ==false){
      var length = amount,
     charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
     retVal = " ";
     for (var i = 0, n =charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
     }
     return retVal
    }
    
    if (symbol == true && numbers ==false &&capword == true && loweword ==false){
      var length = amount,
     charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*",
     retVal = " ";
     for (var i = 0, n =charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
     }
     return retVal
    }
   
    if (symbol == false && numbers ==true &&capword == true && loweword ==true){
      var length = amount,
     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
     retVal = " ";
     for (var i = 0, n =charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
     }
     return retVal
    }
    if (symbol == false && numbers ==true &&capword ==true  && loweword ==false){
      var length = amount,
     charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
     retVal = " ";
     for (var i = 0, n =charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
     }
     return retVal
    }
    if (symbol == false && numbers ==true &&capword == false && loweword ==true){
      var length = amount,
     charset = "abcdefghijklmnopqrstuvwxyz0123456789",
     retVal = " ";
     for (var i = 0, n =charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
     }
     return retVal
    }
    if (symbol == true && numbers ==false &&capword == false && loweword ==true){
      var length = amount,
     charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*",
     retVal = " ";
     for (var i = 0, n =charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
     }
     return retVal
    }
    if (symbol == true && numbers ==true &&capword == false && loweword ==true){
      var length = amount,
     charset = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
     retVal = " ";
     for (var i = 0, n =charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
     }
     return retVal
    }
    if (symbol == false && numbers ==false &&capword == true && loweword ==true){
      var length = amount,
     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
     retVal = " ";
     for (var i = 0, n =charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
     }
     return retVal
    }
    else{
      alert("must use letters")
    }
    return retVal
  };
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
