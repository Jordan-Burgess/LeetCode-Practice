class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        counter = 0
        if needle not in haystack:
            return -1
        else:
            for i in haystack:
                if needle == haystack[counter:len(needle)+counter]:
                    return counter
                else:
                    counter += 1
        
    
