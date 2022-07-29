/* Java program to reverse String using Stack */

// package QueuesAndStacks;

import java.util.*;

public class StaReverseString {
    public static void reverse(StringBuilder str) {
        int n = str.length();
        Stack<Character> obj = new Stack<>();

        for (int i = 0; i < n; i++) {
            obj.push(str.charAt(i));

        }
        // obj.forEach(System.out::println);

        for (int i = 0; i < n; i++) {
            char ch = obj.pop();
            str.setCharAt(i, ch);
        }
    }

    public static void main(String[] args) {
        StringBuilder sts = new StringBuilder("The Hawk will never die");

        reverse(sts);

        System.out.println(sts);

    }

}
