class Solution(object):
    def plusOne(self, digits):
 
        # nums = [str(digit) for digit in digits]
        # value = str(int(''.join(nums)) + 1)
        # return [int(num) for num in value]
    
        return [int(num) for num in str(int(''.join([str(digit) for digit in digits])) + 1)]