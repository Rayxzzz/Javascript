const CryptoJS = require("crypto-js");


const enkripsi = (text) => {
let enkrip = CryptoJS.AES.encrypt(text,'1').toString();
console.log(enkrip)
}

const dekripsi = (text) => {
let bytes  = CryptoJS.AES.decrypt(text, '1');
let original = bytes.toString(CryptoJS.enc.Utf8);
console.log(original)

}

enkripsi("hai");
dekripsi('hai')