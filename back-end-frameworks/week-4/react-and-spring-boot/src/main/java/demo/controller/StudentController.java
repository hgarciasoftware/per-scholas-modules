package demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import demo.exception.ResourceNotFoundException;
import demo.model.Student;
import demo.repository.StudentRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class StudentController {
  @Autowired
  private StudentRepository studentRepo;

  @GetMapping("/allstudents")
  public List<Student> getAllStudents() {
    return studentRepo.findAll();
  }

  @PostMapping("/addstudent")
  public Student newStudents(@RequestBody Student st) {
    return studentRepo.save(st);
  }

  @GetMapping("/student/{id}")
  public ResponseEntity<Student> getStudentById(@PathVariable int id) {
    Student s = studentRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not found"));

    return ResponseEntity.ok(s);
  }

  @GetMapping("/students/{name}")
  public List<Student> getStudentByName(@PathVariable String name) {
    List <Student> students = studentRepo.findByName(name);

    if (students.isEmpty()) {
      System.out.println(new ResourceNotFoundException("Student(s) with the name " + name + " not found"));
    }

    return studentRepo.findByName(name);
  }

  @PutMapping("/student/{id}")
  public ResponseEntity<Student> updateStudent(@PathVariable int id, @RequestBody Student student) {
    Student s = studentRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not found"));

    s.setName(student.getName());
    s.setGrade(student.getGrade());

    Student updatedStudent = studentRepo.save(s);

    return ResponseEntity.ok(updatedStudent);
  }

  @DeleteMapping("/student/{id}")
  public String deleteStudent(@PathVariable int id) {
    studentRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not found"));
    studentRepo.deleteById(id);

    return "The student with id: " + id + " is removed from the database.";
  }
}
