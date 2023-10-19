/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 != 0)return false
    
    let openBrackets = []

    for(let i=0; i<s.length; i++){
        if(s[i] == '(' || s[i] == '{' || s[i] == '['){
            openBrackets.push(s[i])
        }else{
            if(s[i] == ')' && openBrackets[openBrackets.length-1] == '('){
                openBrackets.pop()
            }else if(s[i] == '}' && openBrackets[openBrackets.length-1] == '{'){
                openBrackets.pop()
            }else if(s[i] == ']' && openBrackets[openBrackets.length-1] == '['){
                openBrackets.pop()
            }else return false
        }
    }

    if(openBrackets.length > 0) return false
    return true
};