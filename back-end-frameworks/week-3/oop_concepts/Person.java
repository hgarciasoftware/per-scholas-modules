package oop_concepts;

class Person {
  String name;
  int age;
  UnreadEmailMessages pmail;

  Person(String name, int age) {
    this(name, age, new UnreadEmailMessages());
  }

  Person(String name, int age, UnreadEmailMessages mail) {
    this.name = name;
    this.age = age;
    this.pmail = mail;
  }

  @Override
  public String toString() {
    return "Person [name=" + name + ", age=" + age + "]";
  }
}
