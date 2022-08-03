class Main {

  private static int[] getIntArrayCode(String string) {

    int[] result = new int[string.length()];
    for (int i = 0; i < string.length(); i++) {

      int numericValue = Character.codePointAt(string, i);
      result[i] = (numericValue << 3) + i * 10;
    }

    StringBuffer arrayCode = new StringBuffer();
    // arrayCode.append("new int[]{");
    for (int i = 0; i < result.length; i++) {
      arrayCode.append(result[i]);
      if (i < result.length - 1) {
        arrayCode.append(",");
      }
    }

    // arrayCode.append("}");

    System.out.println(arrayCode.toString());

    return result;
  }

  private static String getString(int[] data) {
      StringBuffer test = new StringBuffer();
      for (int i = 0; i < data.length; i++) {
          int t = (data[i] - i * 10) >> 3;
          test.append((char) t);
      }
      return test.toString();
  }

  public static void main(String[] args) {
    // System.out.println("Hello there!");

    int[] result = getIntArrayCode(System.getenv("FLAG"));

    // System.out.format("Flag is: %s", getString(result));
  }
}