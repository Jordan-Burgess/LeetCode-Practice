/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanKey = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000,
    }
    let sum = 0
    for(let i=0; i<s.length; i++){
        if((s[i]+s[i+1]) in romanKey){
            sum += romanKey[s[i]+s[i+1]]
            i ++
        }else{
            sum += romanKey[s[i]]
        }
    }
    return sum
};