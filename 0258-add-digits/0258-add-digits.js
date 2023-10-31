/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let numString = num.toString()
    let sum = 0
    while(true){
        for(let i=0; i<numString.length; i++){
            sum += parseInt(numString[i])
        }
        if(sum.toString().length == 1) return sum
        numString = sum.toString()
        sum = 0
    }   
};