/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length == 1) return 1
    let highNum = nums[nums.length - 1]
    for(let i = 1; i<nums.length; i++){
        if(nums[i] == nums[i-1]){
            if(nums[i] == highNum){
                return i
            }
            let value = nums.splice(i, 1)
            nums.push(value)
            i--
        }else if(nums[i] < nums[i-1]){
            return i
        }
    }
    return nums.length
};