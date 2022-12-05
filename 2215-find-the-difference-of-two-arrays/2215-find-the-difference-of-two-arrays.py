class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        
        different_nums = []
        for idx in range(len(nums1)-1, -1, -1):
            if nums1[idx] in nums2:
                num = nums1.pop(idx)
                different_nums.append(num)
                while num in nums2:
                    nums2.remove(num)
                    
        for num in different_nums:
            while num in nums1:
                nums1.remove(num)
                
        return [[*set(nums1)], [*set(nums2)]]