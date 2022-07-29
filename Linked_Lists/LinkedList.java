
public class LinkedList {
    Node head;
    static int count = 0;

    static class Node {
        Node next; // Declare Next value - will point to the following node in the list
        int data; // Declare The value of the data for that particular node

        Node(int data) { // Contructor for a new node. Data is passed from main
            this.data = data; // sets the value to the of the node's data to what was passed in
            next = null; // initializes next to null
            count++; // increases count with each new node so that length is known later
            System.out.println("added 1 via constructor");
        }
    }

    public void append(int data) { // Appneds data to the end of the list
        if (head == null) { // Checks to see if the list is empty
            System.out.println("append calling constructor 1");

            head = new Node(data); // If the list is empty, create a new header node
        }
        Node current = head; // Sets the current node to the head node

        while (current.next != null) { // loops uuntil it gets to null wich indicated the end of the list
            current = current.next; // moves pointer from one node to the next
        }
        System.out.println("append calling constructor 2");
        current.next = new Node(data); // At the end of the list it creates a new node and points from the prev node
        return;
    }

    public void prepend(int data) { // adds a new node to the beginning of the list
        System.out.println("prepend calling constructor");
        Node newHead = new Node(data); // Creates a new node and assigns it to a temp pointer
        newHead.next = head; // reassigns the points the new node to the existing head node
        head = newHead; // points the head node to the old head
    }

    public void deleteWithValue(int data) {
        if (head == null) { // If the list is empty, return to main because there is nothing to delete
            return;
        }
        if (head.data == data) { // Compares the data sent
            head = head.next; // If the first node = the data passed in, point
            System.out.println("subtracted 1 via delete");
            count--;
            return;
        }

        Node current = head;
        while (current.next != null) {
            if (current.next.data == data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    public void insertAfter(Node prevNode, int data) {
        if (prevNode == null) {
            System.out.println("The previous node cannot equal null");
            return;
        }
        System.out.println("adding 1 via insert after");
        Node newNode = new Node(data);

        newNode.next = prevNode.next;

        prevNode.next = newNode;
    }

    public void printValues() {
        // what if the list is empty?
        Node current = head;
        while (current != null) {
            System.out.print(current.data + "->");
            current = current.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        LinkedList ll = new LinkedList();

        ll.head = new Node(1);
        Node second = new Node(2);
        Node third = new Node(3);

        ll.head.next = second;
        second.next = third;
        ll.append(4);
        ll.prepend(5);
        System.out.println("Count of Nodes is: " + count);
        ll.printValues();

        ll.deleteWithValue(3);
        System.out.println("Count of Nodes is: " + count);
        ll.printValues();

        ll.deleteWithValue(5);
        System.out.println("Count of Nodes is: " + count);
        ll.printValues();
        ll.insertAfter(ll.head.next.next, 8);
        System.out.println("Count of Nodes is: " + count);
        ll.printValues();
    }

}
