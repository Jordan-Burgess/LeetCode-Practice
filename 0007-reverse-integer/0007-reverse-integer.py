class Solution(object):
    def reverse(self, x):

        x_str_splt = [i for i in str(x)]
        new_int = [i for i in reversed(x_str_splt)]
        
        if new_int[-1] == '-':
            new_int.pop()
            new_int.insert(0, '-')
         
        x = int(''.join(new_int))
        if x > 2 ** 31 or x < -2 ** 31-1:
            return 0
        else: 
            return x