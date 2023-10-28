/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length == 1) return nums[0]
    let count = {}
    for(let i=0; i<nums.length; i++){
        count[`${nums[i]}`] = count[`${nums[i]}`]+1 || 1
    }
    for(key in count){
        if(count[key] == 1){
            return key
        }
    }
};