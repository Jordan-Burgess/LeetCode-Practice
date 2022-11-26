class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        nums = [str(digit) for digit in digits]
        value = str(int(''.join(nums)) + 1)
        return [int(num) for num in value]