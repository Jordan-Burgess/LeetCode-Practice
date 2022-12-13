class Solution(object):
    def sortArray(self, nums):
        if len(nums) <= 1:
            return nums

        mid = len(nums) // 2
        left_values = self.sortArray(nums[:mid])
        right_values = self.sortArray(nums[mid:])
        left_idx = 0
        right_idx = 0
        sorted_values = []

        while left_idx < len(left_values) and right_idx < len(right_values):
            if left_values[left_idx] < right_values[right_idx]:
                sorted_values.append(left_values[left_idx])
                left_idx += 1
            else:
                sorted_values.append(right_values[right_idx])
                right_idx += 1

        sorted_values += right_values[right_idx:]
        sorted_values += left_values[left_idx:]

        return sorted_values
