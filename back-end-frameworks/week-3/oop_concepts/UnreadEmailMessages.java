package oop_concepts;

public class UnreadEmailMessages implements EmailInterface {
  @Override
  public int count(int numHours) {
    int magicNumber = (int) Math.round( Math.pow(numHours + 3, 2) / 12 ); // https://oeis.org/A001399
    int randomness = (int) (Math.floor( Math.random() * 11 ) - 5);

    return Math.max(0, magicNumber + randomness);
  }

  @Override
  public String getMessage() {
    return "\"It is indeed my pleasure to write to you this letter, which I believe will be a surprise to you. I actually …\"";
  }
}
