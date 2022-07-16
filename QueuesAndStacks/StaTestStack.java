import java.util.*;

public class StaTestStack {
    int s[] = new int[10];

    public static void main(String[] args) {
        Stack<Integer> sts = new Stack<>();

        sts.push(15);
        sts.push(20);
        sts.push(35);
        sts.forEach(System.out::println);
        System.out.println(sts.peek());
        sts.pop();
        System.out.println(sts.peek());
        System.out.println(sts.size());
        // sts.pop();
        sts.push(5);
        sts.forEach(System.out::println);
        System.out.println(sts.peek());
        System.out.println(sts.isEmpty());

        sts.forEach(System.out::println);
        System.out.println(sts.isEmpty());
        Integer pos = sts.search(15);
        System.out.println(pos);
    }
}