
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(node) {
        this.head = node;
    }

    traverse(){ // can be null also
        let current = this.head;
        while(current !== null){
            // do something with current
            current = current.next;
        }
    }

    insert(value, head, position = 0) {
        const newNode = new Node(value);
        if (position === 0) {
            newNode.next = head;
            this.head = newNode;
            return this;
        }
        // 1 2 3
        let current = this.head;
        for (let i = 0; i < position - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        return this;
    }
    remove(head, position = 0) {
        if (position === 0) {
            this.head = this.head.next;
            return this;
        }
        let current = this.head;
        //  1 2 3
        for (let i = 0; i < position - 1; i++) {
            current = current.next;
        }
        if (current.next !== null) {
            current.next = current.next.next;
        }

    }

}