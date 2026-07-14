function generatePassword(length, includeDigits = true, includeSpecialChars = true) {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  if (includeDigits) characters += '0123456789';
  if (includeSpecialChars) characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}
const passwordLength = 12;
console.log("Generated password:", generatePassword(passwordLength));
