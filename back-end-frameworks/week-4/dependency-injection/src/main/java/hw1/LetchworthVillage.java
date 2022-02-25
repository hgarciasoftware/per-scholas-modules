package hw1;

import org.springframework.stereotype.Component;

@Component
public class LetchworthVillage extends Building {
  private boolean isHaunted;

  public LetchworthVillage() {
    isHaunted = Math.random() < .5;
  }

  public void checkForGhosts() {
    System.out.println("  let's check for ghosts!");
    System.out.println("    any ghosts . . . ?");
    System.out.println(isHaunted == true ? "      nope :)" : "      nope");
  }
}
