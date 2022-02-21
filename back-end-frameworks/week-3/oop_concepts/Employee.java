package oop_concepts;

public class Employee extends Person {
  Employee(String name, int age) {
    super(name, age);
  }

  @Override
  public String toString() {
    return "Employee [name=" + name + ", age=" + age + "]";
  }
}
