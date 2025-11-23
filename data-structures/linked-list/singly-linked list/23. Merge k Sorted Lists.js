/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists || !lists.length) return null; // []
    if (lists.length === 1 && !lists[0]) return null; // [[]]
    if (lists.length === 1) return lists[0]; // [[1]] or  [[1,2]]


    let current = lists[0];
    for (let i = 1; i < lists.length; i++) {
        current = mergeLinkedinLists(current, lists[i]);
    }

    return current;
    // take first and second
    // merge them in one sorted
    // merge result with other arrays
};

/*
 *  @param {ListNode} l1
 *  @param {ListNode} l2
 *  @return {ListNode}
 */
function mergeLinkedinLists(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
    while(l1 && l2) {
        if (l1.val < l2.val) {
            current.next = new ListNode(l1.val);
            current = current.next;
            l1 = l1.next;
        } else {
            current.next = new ListNode(l2.val);
            current = current.next;
            l2 = l2.next;
        }
    }

    while(l1){
        current.next = new ListNode(l1.val);
        current = current.next;
        l1 = l1.next;
    }

    while(l2){
        current.next = new ListNode(l2.val);
        current = current.next;
        l2 = l2.next;
    }
    return dummy.next;
}