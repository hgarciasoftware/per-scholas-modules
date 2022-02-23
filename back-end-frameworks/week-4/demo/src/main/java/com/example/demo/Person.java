package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Person {
  @Autowired
  private Address address;

  public void show() {
    System.out.println("\n  called Person's show instance method");
  }

  public void showWeather() {
    address.weather();
  }
}
