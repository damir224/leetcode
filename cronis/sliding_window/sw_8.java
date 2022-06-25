public class sw_8 {
  public static void main(String[] args) {
    // String str = "ilikedoganddoglikesme";
    // int startIndex = 5;
    // String str = "ilikedoganddoglikeme";
    // int startIndex = 6;
    String str = "ilikedoganddorlikeme";
    int startIndex = 11;
    String[] words = {"like", "dog"};
    System.out.println(isWordExistInStr(str, startIndex, words));
  };

  static String isWordExistInStr(String str, int startIndex, String[] words) {
    for (String word:words) {
      int strIndex = startIndex;
      boolean rightWord = false;

      while(strIndex < startIndex + word.length()) {
        int wordIndex = strIndex - startIndex;
        if(str.charAt(strIndex) != word.charAt(wordIndex)) {
          rightWord = false;
          break;
        } else {
          rightWord = true;
        } 

        strIndex++;
      }

      if (rightWord) {
        return word;
      }
    }
    return null;
  }
}
