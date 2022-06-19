public class getMaxSetSize2_1 {
  public static void main(String[] args) {
    int arr[] = { 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1 };
    System.out.println(getMaxSetSize(arr));
  };

  static int getMaxSetSize(int[] arr) {
    int windowStart = -1;
    int windowEnd = 0;
    int maxSetSize = 0;
    int firstZeroIndex = -1;
    while (windowEnd < arr.length) {
      if (arr[windowEnd] == 0) {
        maxSetSize = Math.max(maxSetSize, windowEnd - windowStart);
        windowStart = firstZeroIndex + 1;
        firstZeroIndex = windowEnd;
      }
      windowEnd++;
    }
    if (windowStart == -1) {
      return arr.length;
    }
    return Math.max(maxSetSize, windowEnd - windowStart);
  }
}
