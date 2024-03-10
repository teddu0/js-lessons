/**
 * Работа со строками
 */


function checkPalindrome(text){
    let reversetText = text.split("").reverse().join("");
    return text === reversetText;
}


let isPalindrome = checkPalindrome("kazak");
let isNotPalindrome = checkPalindrome("hello")
console.log("kazak - "+isPalindrome+"\n"+"hello - "+isNotPalindrome)