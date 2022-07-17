// Queue class
class Queue {
    // Array is used to implement a queue
    constructor() {
        this.items = [];
    }

    // enqueue(item) - adds items to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }
    
    // dequeue()
    dequeue() {
        if(this.isEmpty()) 
            return "underflow";
        else
            return this.items.shift();
    }

    // front() - returns the front element of the queue without removing it
    front() {
        if(this.isEmpty()) 
            return "No elements in the queue";
        return this.items[0];
    }

    // isEmpty() - returns true is the queue is empty
    isEmpty() {
        return this.items.length == 0 ? true : false;
    }

    // printQueue()
    printQueue() {
        let str = "";
        for(let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

const q = new Queue;

console.log(q.dequeue());

console.log(q.isEmpty());

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.enqueue(60);

console.log(q.isEmpty());

console.log(q.front());

console.log(q.dequeue());

console.log(q.dequeue());

console.log(q.printQueue());


