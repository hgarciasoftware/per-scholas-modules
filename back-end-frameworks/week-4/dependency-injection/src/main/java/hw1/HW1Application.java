package hw1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class HW1Application {
  public static void main(String[] args) {
    ConfigurableApplicationContext context = SpringApplication.run(HW1Application.class, args);

    System.out.println("Spring Boot app running ...");

    Skyscraper skyscraper = context.getBean(Skyscraper.class);
    Condominium condo = context.getBean(Condominium.class);
    LetchworthVillage letchworth = context.getBean(LetchworthVillage.class);

    System.out.println("\n--- SKYSCRAPER ---");
    skyscraper.checkHeight();

    System.out.println("\n--- CONDOMINIUM ---");
    condo.displayBuildingOwner();

    System.out.println("\n--- LETCHWORTH VILLAGE ---");
    letchworth.checkForGhosts();
  }
}
