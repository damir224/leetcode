public class sw_8_2 {
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
      String curWord = str.substring(startIndex,word.length() + startIndex); 
      if(word.equals(curWord)){
        return word;
      }
    }
    return null;
  }
}
