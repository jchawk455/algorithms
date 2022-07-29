public class SrtBubbleSort {
    void bubbleSort(int arr[]) {
        int n = arr.length;     // set n to the array length
        for(int i = 0; i < n - 1; i++) {
            for(int j = 0; j < n - i - 1; j++) {   // loop through the array and compare
                if(arr[j] > arr[j + 1]) {
                    int temp = arr[j];  // if current is > next vale, swap them
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp; 
                }
            }
        }
    }

    public void printArray(int arr[]) {
        int n = arr.length;
        for(int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        SrtBubbleSort bs = new SrtBubbleSort();
        int arr[] = {64, 34, 25, 12, 22, 11, 90, 33};
        bs.bubbleSort(arr);
        System.out.println("Sorted Array");
        bs.printArray(arr);
    }
}
