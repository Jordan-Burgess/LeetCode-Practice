/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length > haystack.length) return -1
    for(let i=0; i <= haystack.length - needle.length; i++){
        if(haystack.slice(i, needle.length + i) == needle){
            return i
        }
    }
    return -1
};