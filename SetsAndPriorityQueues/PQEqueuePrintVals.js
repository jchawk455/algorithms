//priority ordered queue
//smaller priorities are more important (1 is most important, 10 is least important)

class PriNode{
    constructor(val,pri){
        this.value = val;
        this.next = null;
        this.priority = pri;
    }
}

class PriQueue{
    constructor(){
        this.head = null;
    }

    enqueue(val, pri){
        //finds its place via priority in the list
        //add to list
        var newNode = new PriNode(val, pri);
        if (this.isEmpty()) {
            this.head = newNode;
            return this;
        } else {
            if (newNode.priority < this.head.priotity) {
                var temp = this.head;
                this.head = newNode;
                newNode.next = temp;
                return this;
            }
            var runner = this.head;
            while (runner.next) {
                if (newNode.priority <= runner.next.priority) {
                    newNode.next = runner.next;
                    runner.next = newNode;
                    return this
                }
                runner.next
            }
            runner.next = newNode;
            return this;
        }
    }

    isEmpty(){
        return this.head === null;
    }

    printVals(){
        var runner = this.head;
        while (runner) {
            console.log(runner.value);
            runner = runner.next
        }
    }
}

var myPriQueue = new PriQueue;
myPriQueue.enqueue(1, 9);
myPriQueue.enqueue(12, 7);
myPriQueue.enqueue(3, 3);
myPriQueue.printVals();