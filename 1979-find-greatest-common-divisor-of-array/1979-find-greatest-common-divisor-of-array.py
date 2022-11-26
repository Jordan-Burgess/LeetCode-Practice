class Solution(object):
    def findGCD(self, nums):
        nums.sort()
        gcd = 1
        for i in range(1, nums[0]+1):
            if nums[0] % i == 0 and nums[-1] % i == 0:
                gcd = i
            
        return gcd