/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let ranges = []
    let j = 0
    for(let i=0; i<nums.length; i++){
        for(j=i+1; j<nums.length; j++){
            if(nums[j]-1 != nums[j-1])break
        }
        if(j-i == 1){
            ranges.push(`${nums[i]}`)
            i = j-1
        }else{
            ranges.push(`${nums[i]}->${nums[j-1]}`)
            i = j-1
        }
    }
    return ranges
};
