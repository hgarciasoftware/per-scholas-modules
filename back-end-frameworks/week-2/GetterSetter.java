class Computer {
  private static float taxRate = 1.08875f;

  private float cost;
  private int year;
  private String name;

  public static void calculateCostWithTax(float cost) {
    float costWithTax = cost * taxRate;

    System.out.println("\ncost is: $" + cost);
    System.out.println("cost with tax (in NYC) is: $" + costWithTax);
  }

  public float getCost() {
    return cost;
  }

  public String getName() {
    return name;
  }

  public int getYear() {
    return year;
  }

  public void setCost(float cost) {
    this.cost = cost;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setYear(int year) {
    this.year = year;
  }
}

public class GetterSetter {
  public static void main(String args[]) {
    Computer toshiba = new Computer();
    Computer sony = new Computer();

    toshiba.setCost(399.99f);
    toshiba.setName("Dynabook");
    toshiba.setYear(2019);
    Computer.calculateCostWithTax(toshiba.getCost());

    sony.setCost(649f);
    sony.setName("VAIO");
    sony.setYear(2014);
    Computer.calculateCostWithTax(sony.getCost());
  }
}
