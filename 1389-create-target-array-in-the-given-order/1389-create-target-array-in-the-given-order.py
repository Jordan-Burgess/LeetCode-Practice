class Solution(object):
    def createTargetArray(self, nums, index):
        """
        :type nums: List[int]
        :type index: List[int]
        :rtype: List[int]
        """
        res = []
        idx = 0
        
        while idx < len(nums):
            res.insert(index[idx], nums[idx])
            idx += 1
            
        return res