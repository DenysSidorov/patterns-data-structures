/*
1. Count the length of the list (n).
2. Calculate the base size of each part and the remainder:

    size = Math.floor(n / k) — number of nodes in each part.
    extra = n % k — how many parts will be one node longer.


3. The first extra parts will have size + 1 nodes.
4. The remaining k - extra parts will have size nodes.
5. Traverse the list, cutting off chunks of the required length and storing them in the result array.
* */

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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    // 1. Count the total number of nodes in the list
    let n = 0;
    let curr = head;
    while (curr) {
        n++;
        curr = curr.next;
    }

    // 2. Determine base size of each part and how many get +1
    const size = Math.floor(n / k);   // base size for each part
    let extra = n % k;                // number of parts that get one extra node

    // 3. Prepare result array with k parts
    const result = [];
    curr = head;

    // 4. Iterate k times to create each part
    for (let i = 0; i < k; i++) {
        const partHead = curr;
        const partSize = size + (extra > 0 ? 1 : 0); // current part size
        extra = Math.max(0, extra - 1);              // decrease extra if used

        // Move curr forward (partSize - 1) times
        for (let j = 0; j < partSize - 1 && curr; j++) {
            curr = curr.next;
        }

        // If curr is not null, cut the link to the next part
        if (curr) {
            const nextPart = curr.next;
            curr.next = null;   // break the connection
            curr = nextPart;    // move to start of next part
        }

        result.push(partHead);  // partHead can be null for empty parts
    }

    return result;
};