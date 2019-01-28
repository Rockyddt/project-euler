class Solution {
  private primeSet: Set<number>;
  constructor() {
    this.primeSet = new Set();
  }

  public solve(n: number): number {
    let m = n;
    let factor = 2;
    let maxFactor = 0;

    while (factor < Math.sqrt(m)) {
      if (m % factor === 0) {
        if (this.isPrime(factor)) {
          maxFactor = Math.max(factor, maxFactor);
        }
        m /= factor;
        factor = 2;
      } else {
        factor++;
      }
    }
    if (this.isPrime(m)) {
      maxFactor = Math.max(m, maxFactor);
    }
    return maxFactor;
  }

  public isPrime(n: number): boolean {
    if (this.primeSet.has(n)) {
      return true;
    } else {
      for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % 2 === 0) {
          return false;
        }
      }
    }
    this.primeSet.add(n);
    return true;
  }
}

export default Solution;
