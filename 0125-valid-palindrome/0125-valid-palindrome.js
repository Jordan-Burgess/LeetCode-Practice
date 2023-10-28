/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length == 1) return true
    let formatString = s.trim().replace(/[^a-z0-9]/gi, '').split(" ").join("").toLowerCase()
    for(let i=0; i<formatString.length/2; i++){
        if(formatString[i] != formatString[formatString.length-1-i]){
            return false
        }
    }
    return true
};