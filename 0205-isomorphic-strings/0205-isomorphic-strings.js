/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length == 1)return true
    let map = {}
    map[s[0]] = t[0]

    for(let i=1; i<s.length; i++){
        if(s[i] in map){
            if(map[s[i]] != t[i]) return false
        }else{
            if(Object.values(map).includes(t[i]))return false
            map[s[i]] = t[i]
        }
    }
    return true
};