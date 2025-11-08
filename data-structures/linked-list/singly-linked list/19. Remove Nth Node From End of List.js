/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// main idea here in 3 steps:
// 1. move fast pointer by n steps
// 2. move both slow and fast pointers until fast.next is null
// 3. skip next node for slow pointer
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    // 1. fast go by n steps
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // 2. shift both, while fast.next != null
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // 3. skip next after sllow
    slow.next = slow.next.next;

    return dummy.next;
};