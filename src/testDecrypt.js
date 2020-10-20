const CryptoJS = require('crypto-js');
​
export const encryptWithAES = (data, passphrase) => {
  return CryptoJS.AES.encrypt(data, passphrase).toString();
};
​
export const decryptWithAES = (data, passphrase) => {
  const bytes = CryptoJS.AES.decrypt(data, passphrase);
  try {
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    var originalText = "";
  }
  return originalText;
};