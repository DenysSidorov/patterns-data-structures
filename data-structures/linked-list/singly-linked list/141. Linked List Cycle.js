/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null || head?.next === null) {
        return false;
    }

    let slow = head;
    let fast = head;
    let currentHead = head
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast && slow !== null && fast !== null) {
            return true
        }
        if (currentHead === slow){
            return false;
        }
    }
    return false;
/*
main idea in: when slow and fast meet it means the linkedlist is cycled
*/


    // let slow = head;
    // let fast = head;

    // if (!slow || !slow.next) {
    //     return false
    // }

    // while(fast !== null && fast.next !== null) {
    //     slow = slow.next;
    //     fast = fast.next.next;
    //      if (slow === fast) {
    //         return true;
    //     }
    // }

    // return false;
};