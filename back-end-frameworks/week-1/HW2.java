import java.util.Scanner;

class HW2 {
  private static long tailRecursiveFibonacci(int n, long a, long b) {
    System.out.println(a);

    if (n == 1) {
      return a;
    }
    if (n == 2) {
      return b;
    }

    return tailRecursiveFibonacci(n - 1, b, a + b);
  }

  // write fibonnaci series for the first n numbers in the series (n is a user entered value)
  public static void exercise1() {
    Scanner scanner = new Scanner(System.in);

    System.out.print("enter a number: ");

    int n = scanner.nextInt();

    System.out.println("the first " + n + " fibonacci numbers are:");
    System.out.println(tailRecursiveFibonacci(n, 0, 1) + "\n");
  }

  // write a program to see if a user entered string is a palindrome or not
  public static void exercise2() {
    Scanner scanner = new Scanner(System.in);

    System.out.print("enter a string: ");

    String string = scanner.nextLine();
    int stringLength = string.length();
    boolean isPalindrome = true;

    for (int i = 0; i < stringLength / 2; i++) {
      if ( string.charAt(i) != string.charAt(stringLength - 1 - i) ) {
        isPalindrome = false;
        System.out.println(string + " is not a palindrome\n");
        break;
      }
    }

    if (isPalindrome) {
      System.out.println(string + " is a palindrome\n");
    }
  }

  // determine whether a user entered number is an armstrong number
  public static void bonusExercise() {
    Scanner scanner = new Scanner(System.in);

    System.out.print("enter a number: ");

    int number = scanner.nextInt();
    String numericString = Integer.toString(number);
    int numberOfDigits = numericString.length();
    int sum = 0;

    for (int i = 0; i < numberOfDigits; i++) {
      int digit = Character.getNumericValue( numericString.charAt(i) );
      sum += Math.pow(digit, numberOfDigits);
    }

    System.out.println(number + " is" + (sum == number ? "" : " not") + " an armstrong number\n");
  }

  public static void main(String args[]) {
    System.out.println("--- EXERCISE 1 ---");
    exercise1();
    System.out.println("--- EXERCISE 2 ---");
    exercise2();
    System.out.println("--- BONUS EXERCISE ---");
    bonusExercise();
  }
}
