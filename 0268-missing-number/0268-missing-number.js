/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sortNums = nums.sort((a, b)=>{return a-b})
    console.log(sortNums)
    for(let i=0; i<=sortNums.length; i++){
        if(sortNums[i] != i || sortNums[i] == undefined) return i
    }
};