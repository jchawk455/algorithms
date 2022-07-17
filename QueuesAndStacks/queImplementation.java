import java.util.*;

public class queImplementation {
    public static void main(String[] args) {
        Queue<Integer> q = new LinkedList<>();

        for (int i = 0; i < 5; i++) {
            System.out.println(q.offer(i));
        }

        // display the contets of the queue
        System.out.println("Elements of queue " + q);

        // remove the head of the queue
        int removedele = q.remove();
        System.out.println("removed element " + removedele);

        System.out.println(q);

        // To view the head of the queue
        int head = q.peek();
        System.out.println("head of the queue: " + head);

        // Rest all methods of collection
        // interface like size and contains
        // can be used with this
        // implementation.

        int size = q.size();
        System.out.println("size of the queue " + size);

    }
}
