# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        
        i = 1
        
        end_tracker = head
        count_tracker = None
        
        while end_tracker.next != None:
            end_tracker = end_tracker.next
            if i == n:
                count_tracker = head
            elif i > n:
                count_tracker = count_tracker.next
            i += 1
                
        if count_tracker != None:
            count_tracker.next = count_tracker.next.next
            return head
        else:
            head = head.next
            return head
                
            