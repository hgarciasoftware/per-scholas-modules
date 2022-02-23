package demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(value="prototype")
public class Person {
  @Autowired
  private Address address;

  @Autowired
  public void setAddress(Address address) {
    this.address = address;
  }

  @Autowired
  public Person(Address address) {
    this.address = address;
  }

  public void show() {
    System.out.println("\n  called Person's show instance method");
  }

  public void showWeather() {
    address.weather();
  }
}
