var twoSum = function(nums, target) {
    let indices = []
    for (let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if (j == i){
             continue   
            }
            else if (nums[j] + nums[i] == target){
                indices.push(i)
                indices.push(j)
                return indices
            }
        }
    }
};
