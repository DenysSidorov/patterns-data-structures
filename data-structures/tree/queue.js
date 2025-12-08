class Queue {
    constructor() {
        this.list = [];
    }

    enqueue(value){
        this.list.push(value);
    }

    dequeue(){
        return this.list.shift();
    }

    isEmpty(){
        return !this.list.length;
    }
}

export default Queue;