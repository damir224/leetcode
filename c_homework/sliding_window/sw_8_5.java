public class sw_8_5 {
  public static void main(String[] args) {
    String str = "ilikedoganddoglikesme";
    int startIndex = 5;

    String str1 = "ilikedoganddoglikeme";
    int startIndex1 = 6;

    String str2 = "ilikedoganddorlikeme";
    int startIndex2 = 11;

    String str3 = "ilike";
    int startIndex3 = 1;

    String[] words = { "like", "dog" };

    // System.out.println(isWordExistInStr(str, startIndex, words));
    // System.out.println(isWordExistInStr(str1, startIndex1, words));
    // System.out.println(isWordExistInStr(str2, startIndex2, words));
    System.out.println(isWordExistInStr(str3, startIndex3, words));

  };

  static String isWordExistInStr(String str, int startIndex, String[] words) {
    if (str.length() == 0) {
      return null;
    }

    for (String word : words) {

      if (str.length() < word.length() + startIndex) {
        return null;
      }

      if (word.charAt(0) != str.charAt(startIndex)) {
        continue;
      }

      String curWord = str.substring(startIndex, word.length() + startIndex);
      if (word.equals(curWord)) {
        return word;
      }

    }
    return null;
  }
}
