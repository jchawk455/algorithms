import java.util.*;

public class BasSquareDigit {
    public static void main(String[] args) {
        int num = 9119;
        ArrayList<Integer> numList = new ArrayList<>();
        ArrayList<Integer> revArrayList = new ArrayList<>();
        BasSquareDigit bs = new BasSquareDigit();
        int i = 0;

        while(num != 0 ) {
            numList.add((num % 10) * (num % 10)) ; 
            num /= 10;           
        }
        // System.out.println(numList);
        int total = bs.revArrayListAndCombine(numList);
        // System.out.println(total);
    }

    public int revArrayListAndCombine(ArrayList<Integer> aList) {
        ArrayList<Integer> revArrayList = new ArrayList<Integer>();
        String s = new String("0");
        
        for(int i = aList.size() - 1; i >= 0; i-- ) {
            revArrayList.add(aList.get(i));
        }

        for(Integer x : revArrayList) {
            // System.out.println("i is " + i);
            s += x.toString();
            // System.out.println("total is " + total);
        }

        int total = Integer.parseInt(s);

        return total;
    }
}