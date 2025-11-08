/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function(head) {
    let prev = null;
    let next = null;

    while(head) {
        next = head.next; // remember next as a next node
        head.next = prev; // swap
        prev = head // move forward
        head = next // move forward
    }
    return prev;
};