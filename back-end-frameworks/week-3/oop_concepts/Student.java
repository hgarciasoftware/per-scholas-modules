package oop_concepts;

public class Student extends Person {
  Student(String name, int age) {
    super(name, age);
  }

  @Override
  public String toString() {
    return "Student [name=" + name + ", age=" + age + "]";
  }
}
