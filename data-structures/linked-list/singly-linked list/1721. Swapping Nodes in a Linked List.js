/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// main idea in array, with swapped elements and after we make new linkedlist
var swapNodes = function(head, k) {
    let a = [];
    let current = head;
    while(current) {
        a.push(current.val);
        current = current.next;
    }
    // [1,2,3,4,5] ->  [1,4,3, 2 , 5]
    let left = a[k - 1];
    let right = a[a.length - k];
    if (left === undefined || right === undefined ){
        throw Error('Out of range');
    }
    a[k-1] = right;
    a[a.length - k] = left;
    const dummy = new ListNode();
    let cur = dummy;
    for(let i = 0; i < a.length; i++) {
        cur.next = new ListNode(a[i]);
        cur = cur.next;
    }
    return dummy.next;
};