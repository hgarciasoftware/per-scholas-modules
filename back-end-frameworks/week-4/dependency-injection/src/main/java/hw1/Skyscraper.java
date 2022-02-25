package hw1;

import org.springframework.stereotype.Component;

@Component
public class Skyscraper extends Building {
  public void checkHeight() {
    System.out.println("  how tall is this skyscraper?");

    long height = Math.round(Math.random() * 1000) + 1000;

    System.out.println("    this skyscraper is " + height + " feet tall!");
  }
}
