/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let nStr = n.toString()
    let active = true
    let checkedNums = [n]
    while(active){
        let sum = 0
        for(let i=0; i<nStr.length; i++){
            sum += parseInt(nStr[i]) ** 2
        }
        if(sum == 1)return true
        if(sum in checkedNums)return false
        else checkedNums.push(sum)

        nStr = sum.toString()
    }
};