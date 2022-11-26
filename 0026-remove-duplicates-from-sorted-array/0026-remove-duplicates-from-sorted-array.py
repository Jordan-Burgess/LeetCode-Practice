class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) == 1:
            return 1
        
        high_value = nums[-1]
        idx = 1
        
        while idx < len(nums):
            if nums[idx] == nums[idx-1]:
                value = nums.pop(idx)
                nums.append(value)
                idx -= 1
            if nums[idx] == high_value:
                return idx+1
            idx += 1
            
[0,1,1,1,2,2,3,3,4,0]   