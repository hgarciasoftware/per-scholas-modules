package hw1;

import org.springframework.beans.factory.annotation.Autowired;

public abstract class Building {
  protected BuildingOwner buildingOwner;
  private int yearBuilt;
  private String address;

  public BuildingOwner getBuildingOwner() {
    return buildingOwner;
  }

  public int getYearBuilt() {
    return yearBuilt;
  }

  public String getAddress() {
    return address;
  }

  @Autowired
  public void setBuildingOwner(BuildingOwner buildingOwner) {
    this.buildingOwner = buildingOwner;
  }

  public void setYearBuilt(int yearBuilt) {
    this.yearBuilt = yearBuilt;
  }

  public void setAddress(String address) {
    this.address = address;
  }
}
