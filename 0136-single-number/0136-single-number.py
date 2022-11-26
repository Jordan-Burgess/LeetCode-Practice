class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        for idx in range(len(nums)):
            value = nums.pop(idx)
            if value not in nums:
                return value
            else:
                nums.insert(idx, value)
        