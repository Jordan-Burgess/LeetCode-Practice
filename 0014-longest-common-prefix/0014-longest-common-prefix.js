/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 1) return strs[0]
    
    strs.sort((a,b)=>a.length-b.length)
    let prefix = ''

    if(strs[0].length == 0) return prefix
    
    for(let i=0; i<strs[0].length; i++){
        for(let j=1; j<strs.length; j++){
            if(strs[j][i] != strs[j-1][i]){
                return prefix
            }
        }
        prefix += strs[0][i]
    }
    return prefix
};