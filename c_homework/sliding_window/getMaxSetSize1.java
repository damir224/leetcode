public class getMaxSetSize1 {
  public static void main(String[] args) {
    int arr[] = {1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1};
    System.out.println(getMaxSetSize(arr));
  };

  static int getMaxSetSize(int[] arr) {
    int maxSetSize = 0;
    int windowStart = 0;
    int windowEnd = 0;
    while(windowEnd < arr.length) {
      if(arr[windowEnd] == 0) {
        maxSetSize = Math.max(maxSetSize, windowEnd - windowStart);
        windowStart = windowEnd + 1;
      }
      windowEnd++;
    }
    return Math.max(maxSetSize, windowEnd - windowStart);
  };
}
// public class getMaxSetSize {
//   public static void main(String[] args) {
//     int arr[] = { 3, 1, 2, 5, 4 };
//     var s = new getMaxSetSize().getMaxSetSize1(arr);
//     System.out.println(s);
//   };

//   int getMaxSetSize1(int[] arr) {
//     int maxSetSize = 0;
//     int curSetSize = 0;
//     for (int i = 0; i < arr.length; i++) {
//       if (arr[i] == 1)
//         curSetSize++;
//       else
//         curSetSize = 0;
//       maxSetSize = Math.max(curSetSize, maxSetSize);
//     }
//     return maxSetSize;
//   };
// }
