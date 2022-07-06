public class getMaxSetSize2_0 {
  public static void main(String[] args) {
    int arr[] = { 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1 };
    System.out.println(getMaxSetSize(arr));
  };

  static int getMaxSetSize(int[] arr) {
    int windowStart = 0;
    int windowEnd = 0;
    int zeroCount = 2;
    while (windowEnd < arr.length) {
      if (arr[windowEnd] == 0) {
        zeroCount--;
      }
      if (zeroCount < 1) {
        if (arr[windowStart] == 0) {
          zeroCount++;
        }
        windowStart++;
      }
      windowEnd++;
    }
    return windowEnd - windowStart;
  }
}
