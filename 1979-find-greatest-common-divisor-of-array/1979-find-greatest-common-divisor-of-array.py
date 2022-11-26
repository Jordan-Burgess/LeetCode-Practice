class Solution(object):
    def findGCD(self, nums):
        # nums.sort()
        gcd = 1
        
        for i in range(1, min(nums)+1):
            if min(nums) % i == 0 and max(nums) % i == 0:
                gcd = i
            
        return gcd