/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1) {
        return list2
    }

    if (!list2) {
        return list1
    }

    let head = null;
    let prev = null;
    while (list1 && list2) {
        let newNode = null;
        if (list1.val <= list2.val) {
            newNode = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            newNode = new ListNode(list2.val);
            list2 = list2.next;
        }
        if (!head) {
            head = newNode;
        } else {
            prev.next = newNode;
        }
        prev = newNode;
    }

    while (list1) {
        let newNode = new ListNode(list1.val);
        prev.next = newNode;
        prev = newNode;
        list1 = list1.next;
    }

    while (list2) {
        let newNode = new ListNode(list2.val);
        prev.next = newNode;
        prev = newNode;
        list2 = list2.next;
    }
    return head;
};