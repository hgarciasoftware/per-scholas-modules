package hw1;

import org.springframework.stereotype.Component;

@Component
public class Condominium extends Building {
  public void displayBuildingOwner() {
    System.out.println("  who owns this condominium?");
    System.out.println("  " + this.buildingOwner);
  }
}
