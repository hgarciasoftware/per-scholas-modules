package demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class DemoApplication {
  public static void main(String[] args) {
    ConfigurableApplicationContext Context = SpringApplication.run(DemoApplication.class, args);

    System.out.println("Spring Boot app running ...");

    Person p1 = Context.getBean(Person.class);

    p1.show();
    p1.showWeather();
  }
}
