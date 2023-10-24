/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(digits[digits.length-1] == 9){
        digits[digits.length-1] = 10
    }
    for(let i = digits.length-1; i >= 0; i--){
        if(digits[i] < 9){
            digits[i] = digits[i] + 1
            return digits
        }
        if(i == 0){
            if(digits[i] == 9){
                return digits
            }else{
                digits[i] = 0
                digits.unshift(1)
            }
        }else{
            digits[i] = 0
            digits[i-1] = digits[i-1] + 1
            if(digits[i-1] < 10) return digits
        }
    }
    return digits
};