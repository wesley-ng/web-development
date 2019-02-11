// * Roman Numeral Converter
// * Convert the given number into roman numeral
// * roman numerals should be provided in uppercase
function convertToRoman(num) {
    let specialNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNum  = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let roman = '';
    let i = 0;
    while (i < specialNum.length) {
        while (specialNum[i] <= num) {
            roman += romanNum[i];
            console.log(roman);
            num-=specialNum[i];
            console.log(num);
        }
        i++;
    }
    return roman;
}

console.log(convertToRoman(34));