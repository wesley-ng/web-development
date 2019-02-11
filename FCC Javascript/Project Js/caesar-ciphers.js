// * Caesars Cipher
// * a common modern use is ROT13 where the values of the letters are shifted by 13 places
function rot13(str) {
    let cipher = str => {
        let code = str.charCodeAt(str);
        if (code >= 65 && code < 78) {
            code += 13;
        } else if (code >= 78 && code < 91) {
            code -= 13;
        }
        return String.fromCharCode(code);
    };
    return str.split('').map(element => cipher(element)).join('');
}

console.log(rot13('SERR PBQR PNZC'));
console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));