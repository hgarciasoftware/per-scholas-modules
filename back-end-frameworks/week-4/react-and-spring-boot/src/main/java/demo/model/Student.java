package demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="students")
public class Student {
  @Id
  private int id;
  private String name;
  private int grade;

  public Student() {}

  public Student(int id, String name, int grade) {
    super();
    this.id = id;
    this.name = name;
    this.grade = grade;
  }

  public int getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public int getGrade() {
    return grade;
  }

  public void setId(int id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setGrade(int grade) {
    this.grade = grade;
  }
}
