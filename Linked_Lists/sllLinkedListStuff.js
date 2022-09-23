// This is a class which contructs a node object
// It take the value that was passed in an sets that to the value of the node
// It sets this.next to null because it is not pointing to another node yet
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// This is the class that creates the singly linked list
// It's constructor does one thing - i creates a header node
// The class contains lots of methods to manipulate the list
class SLL {
    constructor() {
        this.head = null;
    }

// This method checks to see if there's any nodes in the list
// If this.head is null, it will return true, otherwise it will return false
    isEmpty() {
        return this.head == null;
    }

//This method copies the linked ist to an array and prints the array
    toArray() {
        if(this.isEmpty()) {
            console.log("This list is empty, there is nothing to print!");
        }
        else {
            var arr = [];
            var runner = this.head;
            while(runner) {
                arr.push(runner.value);
                runner = runner.next;
            }
            console.log(arr);
        }
    }
    // Adds a new node to the end of the list with a new value
    addToBack(val) {
        // if the list is empty, it creates a new node with the value passed in
        if (this.isEmpty()) {
            this.head = new Node(val);
        }
        else {
            // Since the list is not empty, Loops through the current list 
            // until it finds a null point and adds the new node
            var runner = this.head;
            while(runner.next != null) {
                runner = runner.next;
            }
            runner.next = new Node(val);
        }
    }
    // Adds a node to the front of the list.  If the list is empty,
    // It just creates a new node. 
    addToFront(val) {
        var newNode = new Node(val);

        if(this.isEmpty()) {
        // if(this.head == null) {
            this.head = newNode;
            return this;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
            return this;
        }

    }
    removeFromFront() {
        if(this.head == null) {
            console.log("There is nothing to remove!");
        } else {
            this.head = this.head.next;
        }
    }
    getAverage() {
        if(this.isEmpty()) {
            console.log("The list is empty, there's nothing to calculate!");
        } else {
            var sum = 0;
            var counter = 0;
            var runner = this.head;
            while(runner) {
                sum += runner.value;
                counter++;
                runner = runner.next;
            }
            return(sum / counter);
        }
    }
    checkValueIterative(val) {
        if(this.isEmpty()) {
            return "The list is empty, no values to search";
        } else {
            var runner = this.head;
            while(runner) {
                if(runner.value == val) {
                    return true;
                } else {
                    runner = runner.next;
                }
            }
            return false;
        }
    }
    checkValueRecursive(val, runner = this.head) {
        if(runner == null) {
            return false;
        }
        if(runner.value == val) 
            return true;
        else if (runner.value != val) {
            runner = runner.next;
            return this.checkValueRecursive(val, runner);
        }
    }

    // 1) This checks if the head node is null (empty list) and responds that it's empty if true
    // 2) If not, it checks to see if there's only one node.  If it is it will return the value of the songle node
    // display it, and set the head to null, effectively creating an empty list
    // 3) If there's more that one item in the list it loops through until it gets to the second-to-last
    // item in the list(runner.next.next == null).  It sets the next value of the node to null, cutting 
    // off the last item (runner.next = null).  Then it prints out the value of the item that was removed. 
    removeFromBack() {
        if(this.head == null) {
            console.log("There is nothing to remove!");
        } else if(this.head.next == null) {
            var temp = this.head.value;
            this.head = null;
            return temp;
        }
        else {
            var runner = this.head;
            while(runner.next.next != null) {
                runner = runner.next;
            }
            var temp = runner.next.value;
            runner.next = null;
            return temp;
        }
    }
    
    penultimate() {
        if(this.head == null) {
            return "The list is empty!";
        }
        else if(this.head.next == null) {
            return "The list only has one value"
        }
        else {
            var runner = this.head;
            while(runner.next.next != null) {
                runner = runner.next;
            }
            return runner.value;
        }
    }
}

var mySll = new SLL();
// mySll.toArray();
// mySll.removeFromFront();
// mySll.getAverage();
// console.log(mySll.checkValueIterative(45));
// mySll.addToBack(77);
// mySll.toArray();
// mySll.removeFromBack();
// mySll.toArray();
mySll.addToBack(25);
mySll.addToBack(16);
mySll.addToBack(21);
mySll.addToBack(53);
mySll.addToFront(92);
mySll.addToFront(37);
mySll.toArray();
mySll.removeFromFront();
mySll.toArray();
console.log(mySll.getAverage());
console.log(mySll.checkValueIterative(45));
console.log(mySll.checkValueIterative(77));
console.log(mySll.checkValueRecursive(53));
console.log(mySll.checkValueRecursive(21));
console.log(mySll.removeFromBack());
mySll.toArray();
console.log(mySll.penultimate());

