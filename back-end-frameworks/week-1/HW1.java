class HW1 {
  // write an if/else statement for the following requirements:
  // - if student gets 90 or higher: console log  A
  // - if students get 80 or above: console log B
  // - if students get 70 or above: console log C
  // - if students get 55 or above: console log D
  // - any grade lower than 55 is F
  public static void exercise1() {
    int studentGrade = 80;

    System.out.print(studentGrade + " is a ");

    if (studentGrade >= 90) {
      System.out.println('A');
    } else if (studentGrade >= 80) {
      System.out.println('B');
    } else if (studentGrade >= 70) {
      System.out.println('C');
    } else if (studentGrade >= 55) {
      System.out.println('D');
    } else {
      System.out.println('F');
    }
  }

  // using switch case, do the following:
  // - store a number between 1-7
  // - if the number is 1, display a message "Monday", 2 for "Tuesday", 3 for "Wednesday" etc.
  // - anything other than 1-7 would default to "Invalid Input"
  public static void exercise2() {
    int input = 4;

    System.out.print("day " + input + " is ");
    switch (input) {
    case 1:
      System.out.println("monday");
      break;
    case 2:
      System.out.println("tuesday");
      break;
    case 3:
      System.out.println("wednesday");
      break;
    case 4:
      System.out.println("thursday");
      break;
    case 5:
      System.out.println("friday");
      break;
    case 6:
      System.out.println("saturday");
      break;
    case 7:
      System.out.println("sunday");
      break;
    default:
      System.out.println("invalid input");
    }
  }

  // store a number in a variable called num and write an if statement: 
  // - if num is odd, display "Cool"
  // - if num is even and between 2-5, display "Not Cool"
  // - if num is even and between 6-20, display "Cool"
  // - if num is even and greater than 20, display "Not Cool
  public static void exercise3() {
    int num = 29;

    System.out.print(num + " is ");
    if (num % 2 == 1) {
      System.out.println("cool");
    } else {
      if (num < 2) {
        // do nothing
      } else if (num <= 5) {
        System.out.println("not cool");
      } else if (num <= 20) {
        System.out.println("cool");
      } else {
        System.out.println("not cool");
      }
    }
  }

  public static void main(String args[]) {
    System.out.println("--- EXERCISE 1 ---");
    exercise1();
    System.out.println("--- EXERCISE 2 ---");
    exercise2();
    System.out.println("--- EXERCISE 3 ---");
    exercise3();
  }
}
