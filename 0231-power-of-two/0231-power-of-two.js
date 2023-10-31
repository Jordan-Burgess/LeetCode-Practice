/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let power = 0
    while(true){
        if(2**power == n)return true
        else if(2**power > n)return false
        power++
    }
};