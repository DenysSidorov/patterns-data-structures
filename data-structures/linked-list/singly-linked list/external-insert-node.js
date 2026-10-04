/**
 * Definition for a linked list node
 */
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Inserts a new node into the linked list at a specific index
 * @param {ListNode} head - The head of the list
 * @param {any} value - The value to insert
 * @param {number} index - The target position (0-based)
 * @returns {ListNode} - The head of the updated list
 */
function insertNode(head, value, index) {
    const newNode = new ListNode(value);
    // case for the first element




    return head;
}

// --- TESTING UTILITIES ---

/**
 * Converts a linked list to an array for easy comparison
 */
function listToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.value);
        current = current.next;
    }
    return result;
}

/**
 * Simple assertion helper to run cases without external libraries
 */
function runTestCase(description, callback) {
    try {
        callback();
        console.log(`✅ PASSED: ${description}`);
    } catch (error) {
        console.error(`❌ FAILED: ${description}`);
        console.error(`   ${error.message}`);
    }
}

// --- TEST SUITE ---

runTestCase('Insert into an empty list (index 0)', () => {
    const result = insertNode(null, "A", 0);
    const arr = listToArray(result);
    if (JSON.stringify(arr) !== '["A"]') {
        throw new Error(`Expected ["A"], but got ${JSON.stringify(arr)}`);
    }
});

runTestCase('Insert at the head of a non-empty list', () => {
    const head = new ListNode("B");
    const result = insertNode(head, "A", 0);
    const arr = listToArray(result);
    if (JSON.stringify(arr) !== '["A","B"]') {
        throw new Error(`Expected ["A","B"], but got ${JSON.stringify(arr)}`);
    }
});

runTestCase('Insert in the middle of the list', () => {
    const head = new ListNode("A");
    head.next = new ListNode("C"); // A -> C

    const result = insertNode(head, "B", 1); // Expected: A -> B -> C
    const arr = listToArray(result);
    if (JSON.stringify(arr) !== '["A","B","C"]') {
        throw new Error(`Expected ["A","B","C"], but got ${JSON.stringify(arr)}`);
    }
});

runTestCase('Insert at the end of the list', () => {
    const head = new ListNode("A");
    head.next = new ListNode("B");

    const result = insertNode(head, "C", 2);
    const arr = listToArray(result);
    if (JSON.stringify(arr) !== '["A","B","C"]') {
        throw new Error(`Expected ["A","B","C"], but got ${JSON.stringify(arr)}`);
    }
});