
/**
 The iterative method involves iterating through the list, remembering the current pair:
    prev → a → b → next.
 We swap the links:
    prev → b → a → next.
 After this, prev becomes a (the new end of the swapped pair) and we continue.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // Пустой список или один узел – ничего не меняем
    if (!head || !head.next) return head;

    // dummy-узел упрощает обработку первого элемента
    const dummy = new ListNode(0, head);
    let prev = dummy;

    while (prev.next && prev.next.next) {
        const a = prev.next;        // первый узел пары
        const b = a.next;           // второй узел пары
        const nextPair = b.next;    // начало следующей пары

        // Меняем связи: prev → b → a → nextPair
        prev.next = b;
        b.next = a;
        a.next = nextPair;

        // Теперь prev указывает на конец уже поменянной пары (a)
        prev = a;
    }

    return dummy.next;
};