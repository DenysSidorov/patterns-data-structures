/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// for 12521
// 1. find the middle (slow) : 5
// 2. reverse second part  521 but with the head on 1
// 3. compare slow and head by every step

class LinkedList {
    reverse(head) {
        let prev = null;
        let curr = head;
        let forw = null;

        while (curr !== null) {
            forw = curr.next;
            curr.next = prev;
            prev = curr;
            curr = forw;
        }
        return prev;
    }

    isPalindrome(head) {
        let fast = head;
        let slow = head;

        // find the middle (the slow will in the middle)
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        // reverse second part
        slow = this.reverse(slow);

        // check everything
        while (slow !== null) {
            if (slow.val !== head.val){
                return false;
            }
            head = head.next;
            slow = slow.next;
        }

        return slow === null;
    }
}


var isPalindrome = function(head) {
    const list = new LinkedList();
    return list.isPalindrome(head);
};
