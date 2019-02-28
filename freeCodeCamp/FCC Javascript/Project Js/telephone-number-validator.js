// * Telephone number validator
// * return true if the number comes with the format like below
/*
    * 555 - 555 - 5555
    * (555) 555 - 5555
    * (555) 555 - 5555
    * 555 555 5555
    * 5555555555
    * 1 555 555 5555
*/
function telephoneCheck(str) {
    let regex = /^(1\s?)?([(][0-9]{3}[)]|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/;
    return regex.test(str);
}
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("(555-555-5555"));