import java.util.Scanner;

public class Calculator {
  private static Scanner scanner = new Scanner(System.in);

  private static void displayOptions() {
    System.out.println("\nOPTIONS");
    System.out.println("1. Add");
    System.out.println("2. Subtract");
    System.out.println("3. Multiply");
    System.out.println("4. Divide");
    System.out.println("5. Exit");
  }

  private static int getOption() {
    System.out.print("\nenter a number (1-5): ");

    int option = scanner.nextInt();

    if (option < 1 || option > 5) {
      System.out.println("Invalid Entry, Try Again");

      return getOption();
    }

    return option;
  }

  private static float getOperand() {
    System.out.print("enter a number: ");

    return scanner.nextFloat();
  }

  private static String performAddition() {
    System.out.println("\n--- add ---");

    float a = getOperand();
    float b = getOperand();

    return String.valueOf(a + b);
  }

  private static String performDivision() {
    System.out.println("\n--- divide ---");

    float a = getOperand();
    float b = getOperand();

    return String.valueOf(a / b);
  }

  private static String performMultiplication() {
    System.out.println("\n--- multiply ---");

    float a = getOperand();
    float b = getOperand();

    return String.valueOf(a * b);
  }

  private static String performSubtraction() {
    System.out.println("\n--- subtract ---");

    float a = getOperand();
    float b = getOperand();

    return String.valueOf(a - b);
  }

  public static void main(String[] args) {
    System.out.println("--- JAVA CALCULATOR ---");
    displayOptions();

    int option = getOption();
    String result = "";

    switch (option) {
    case 1:
      result = performAddition();
      break;
    case 2:
      result = performSubtraction();
      break;
    case 3:
      result = performMultiplication();
      break;
    case 4:
      result = performDivision();
      break;
    case 5:
    default:
      System.out.println("exit");
      System.exit(0);
    }

    System.out.println("your result is " + result);
  }
}
