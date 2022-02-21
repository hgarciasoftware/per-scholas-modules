package oop_concepts;

import java.util.Scanner;

public class OOPConcepts {
  static Scanner scanner = new Scanner(System.in);

  static Student createStudent() {
    System.out.print("\n  enter student name: ");

    String name = scanner.nextLine();

    System.out.print("  enter student age: ");

    int age = scanner.nextInt();

    scanner.nextLine();

    return new Student(name, age);
  }

  static Employee createEmployee() {
    System.out.print("\n  enter employee name: ");

    String name = scanner.nextLine();

    System.out.print("  enter employee age: ");

    int age = scanner.nextInt();

    scanner.nextLine();

    return new Employee(name, age);
  }

  static Person1 createPerson1() {
    Person1 p = new Person1();

    System.out.print("\n  enter person1 name: ");
    p.setName(scanner.nextLine());

    System.out.print("  enter person1 age: ");
    p.setAge(scanner.nextInt());

    scanner.nextLine();

    return p;
  }

  static void checkUnreadEmailMessages(Person person) {
    System.out.print("\n    do you want to check " + person.name + "'s unread emails? (enter yes or no) ");

    String choice = scanner.next();

    if (choice.equals("yes")) {
      System.out.print("\n      welcome back " + person.name + "! how many HOURS has it been since your last visit? ");

      int numHours = scanner.nextInt();
      int unreadCount = person.pmail.count(numHours);

      System.out.print("        you have approximately " + unreadCount + " unread email messsages.");

      if (unreadCount > 0) {
        System.out.print(" would you like to read one? (enter yes or no) ");

        choice = scanner.next();

        if (choice.equals("yes")) {
          System.out.println("\n          " + person.pmail.getMessage());
        }
      }
    }

    System.out.println("\n    goodbye!");
  }

  public static void main(String args[]) {
    System.out.println("--- OBJECT ORIENTED PROGRAMMING CONCEPTS ---");

    Student student = createStudent();
    Employee employee = createEmployee();
    Person1 person1 = createPerson1();

    System.out.println("\n  " + student);
    System.out.println("  " + employee);
    System.out.println("  " + person1);

    checkUnreadEmailMessages(student);
  }
}
