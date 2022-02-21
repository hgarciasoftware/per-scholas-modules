package oop_concepts;

class Person1 {
  private String name;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getAge() {
    return "[REDACTED]";
  }

  public void setAge(int age) {
    // noop
  }

  @Override
  public String toString() {
    return "Person1 [name=" + name + ", age=[REDACTED]]";
  }
}
