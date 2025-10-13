class ChainCalculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(num) {
    this.value += num;
    return this; // return this for chaining
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.value /= num;
    return this;
  }

  // Optional: get the current value
  result() {
    return this.value;
  }
}

// Usage
const calc = new ChainCalculator(10);
const finalResult = calc.add(5).subtract(3).multiply(2).divide(3).result();

console.log(finalResult); // Output: 8
