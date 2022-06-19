public class getMaxSetSize3 {
  public static void main(String[] args) {
    int[] arr = { 3, 1, -4, 7, 0, -2 };
    System.out.println(getMaxSetSize(arr));
  };

  static int getMaxSetSize(int[] arr) {
    int maxSubArraySize = 0;
    int curSubArraySize = 0;
    int windowEnd = 0;
    int maxSubArrayIndex = 0;
    while (windowEnd < arr.length) {
      curSubArraySize += arr[windowEnd];
      if (maxSubArraySize < curSubArraySize) {
        maxSubArraySize = curSubArraySize;
        maxSubArrayIndex = windowEnd;
      }
      windowEnd++;
    }
    return maxSubArrayIndex;
  }
}
