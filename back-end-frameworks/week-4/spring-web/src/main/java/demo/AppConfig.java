package demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppConfig {
  @RequestMapping("/")
  public String home() {
    return "This is the home page";
  }

  @RequestMapping("/myfirst")
  public String first() {
    return "My first Web Applicication";
  }

  @RequestMapping("/hello")
  public String hello() {
    return "Hello World!!";
  }
}
