package com.example.demo;

import org.springframework.stereotype.Component;

@Component
public class Person {
  public void show() {
    System.out.println("  called Person's show instance method ...");
  }
}
