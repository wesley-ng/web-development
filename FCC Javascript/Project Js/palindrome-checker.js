// * Palindrome Checker
// * return true if palindrome, otherwise false
// * remove all non-alphanumeric characters (punctuation, spaces, and symbols)
// * turn everything into lowercase.
function palindrome(str) {
    // ? remove all symbols, punctuation, and spaces also make it to lower case
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return str === str.split("").reverse().join("");
}
console.log(palindrome("almostomla"));