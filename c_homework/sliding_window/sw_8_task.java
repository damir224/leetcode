import java.util.ArrayList;

public class sw_8_task {
  public static void main(String[] args) {
    String str = "ilikedordogc";
    String[] words = { "like", "dog" };
    System.out.println(maxWordInSentence(str, words));
  };

  static String isWordExistInStr(String str, int startIndex, String[] words, int strLength) {
    for (String word : words) {
      int wordLength = word.length();
      if (word.charAt(0) == str.charAt(startIndex) && strLength >= (wordLength + startIndex)) {
        if (str.substring(startIndex, wordLength + startIndex).equals(word)) {
          return word;
        }
      }
    }

    return null;
  }

  static String maxWordInSentence(String str, String[] words) {
    int strLength = str.length();
    int windowStart = 0;
    int windowEnd = 0;
    ArrayList<String> result = new ArrayList<String>();

    while (windowEnd < strLength) {
      String existWord = isWordExistInStr(str, windowEnd, words, strLength);
      if (existWord != null) {
        String prevWord = str.substring(windowStart, windowEnd);
        result.add(prevWord + ' ' + existWord + ' ');
        windowEnd += existWord.length() - 1;
        windowStart = windowEnd + 1;
      }
      windowEnd++;
    }

    String prevWord = str.substring(windowStart, windowEnd);
    result.add(prevWord);
    return String.join("", result);
  }
}
