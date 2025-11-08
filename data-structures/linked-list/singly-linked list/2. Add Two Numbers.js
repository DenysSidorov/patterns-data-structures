/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // Create a dummy node to simplify result list handling
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;  // Tracks carry-over to the next digit

    // Continue while there are digits in l1, l2, or a carry exists
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Get current digit from l1 (0 if l1 is exhausted)
        let val1 = l1 ? l1.val : 0;
        // Get current digit from l2 (0 if l2 is exhausted)
        let val2 = l2 ? l2.val : 0;

        // Sum the digits plus any carry from previous step
        let total = val1 + val2 + carry;

        // Update carry for the next position (0 or 1)
        carry = Math.floor(total / 10);
        // Extract the current digit (last digit of total)
        let digit = total % 10;

        // Create a new node with the current digit and append it
        current.next = new ListNode(digit);
        current = current.next;

        // Move to the next nodes in l1 and l2 (if they exist)
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    // Return the result list, starting after the dummy node
    return dummy.next;
};