public class sw_8_3 {
  public static void main(String[] args) {
    String str = "ilikedoganddoglikesme";
    int startIndex = 5;
    String str1 = "ilikedoganddoglikeme";
    int startIndex1 = 6;
    String str2 = "ilikedoganddorlikeme";
    int startIndex2 = 11;
    String[] words = {"like", "dog"};
    System.out.println(isWordExistInStr(str, startIndex, words));
    System.out.println(isWordExistInStr(str1, startIndex1, words));
    System.out.println(isWordExistInStr(str2, startIndex2, words));
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
