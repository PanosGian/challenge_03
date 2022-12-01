


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword(){
  //prompt for max number of chars; Check for a valid input number
  var nChars;
  var validNumber = false; 
  do {
    nChars=parseInt(prompt("Give nNumber of password charactes (from 8 to 128)", 8));
    validNumber=(!isNaN(nChars) && (nChars>=8 && nChars<=128) );
    if (!validNumber){
      nChars=parseInt(prompt("Give nNumber of password charactes (from 8 to 128)", 8));
    }
  } while (!validNumber);
//get password options
  var upperCase = confirm("Uppercase letters ? ");
  var lowerCase = confirm("Lowercase letters ? ");
  var numerics = confirm("Numeric ? ");
  var specialChars = confirm("Special characters ? ");


var passwordOptions=[];
  if (upperCase) {
    for (let i=65;i<91;i++){
      passwordOptions.push(String.fromCharCode(i));
    }
  }

  if (lowerCase) {
    for (let i=97;i<123;i++){
      passwordOptions.push(String.fromCharCode(i));
    }
  }

  if (numerics) {
    for (let i=48;i<58;i++){
      passwordOptions.push(String.fromCharCode(i));
    }
  }

  if (specialChars) {
      for (let i=34;i<48;i++){
        passwordOptions.push(String.fromCharCode(i));
      }
      for (let i=58;i<65;i++){
        passwordOptions.push(String.fromCharCode(i));
      }
      for (let i=58;i<65;i++){
        passwordOptions.push(String.fromCharCode(i));
      }
      for (let i=91;i<97;i++){
        passwordOptions.push(String.fromCharCode(i));
      }
      for (let i=123;i<127;i++){
        passwordOptions.push(String.fromCharCode(i));
      }
  }


  //Randon number generator function:
  function getRandom(maxValue){
    let rv= Math.random();
    return Math.floor(rv*maxValue);

  }

  //Generate random password
  var password="";

  for (let i=0;i<nChars;i++)
  {
    let r = getRandom(passwordOptions.length-1);
    password+=passwordOptions[r];
    debugger;
  }
  //debugger;
  console.log(passwordOptions);
  //debugger;
  alert("Your password is : "+password);
  //debugger;

  }




