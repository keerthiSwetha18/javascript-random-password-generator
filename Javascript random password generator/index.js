function generatepassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
  const lowercaseChars = "abdhebdihfguioerrtieihuygjg";
  const uppercaseChars = "QUHYGTPOHYJNBWPSOUHGTJNBHIJG";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*";
  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars :"";
  allowedChars += includeUppercase ? uppercaseChars :"";
  allowedChars += includeNumbers ? numberChars :"";
  allowedChars += includeSymbols ? symbolChars :"";
  
  if(length <=0){
    return(`password length must be at least 1`);
  }
  if (allowedChars.length === 0){
    return(`At least 1 set of character needs to be selected`);
  }
  for(let i = 0; i<length;i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}



const passweordlength = 12;
const includeLowercase = true;
const includeUppercase = false;
const includeNumbers = false;
const includeSymbols = false;
const password = generatepassword(passweordlength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);
console.log(`Generated password :${password}`);