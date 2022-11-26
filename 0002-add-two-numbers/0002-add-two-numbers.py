# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        current_node = l1
        num1 = ''
        num2 = ''
        
        while current_node.next != None:
            num1 += str(current_node.val)
            current_node = current_node.next
        num1 += str(current_node.val)
        
        current_node = l2
        while current_node.next != None:
            num2 += str(current_node.val)
            current_node = current_node.next
        num2 += str(current_node.val)
        
        res = str(int(num1[::-1]) + int(num2[::-1]))[::-1]
        linked_list = ListNode(val=int(res[0]))
        current_node = linked_list
        idx = 1
        while idx < len(res):
            current_node.next = ListNode(val=int(res[idx]))
            current_node = current_node.next
            idx+=1
            
        return linked_list
            
            
            
            
        