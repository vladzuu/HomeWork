class Calculator {
   constructor(startNum = 0) {
      this.startNum = startNum;
      this.result = this.startNum
   }
   plus(num) {
      this.result += num
   }
   minus(num) {
      this.result -= num
   }
   divide(num) {
      this.result /= num
   }
   multiple(num) {
      this.result *= num
   }

}
let sample = new Calculator(100);
sample.plus(5)
sample.minus(3)
sample.divide(5)
sample.multiple(5)
console.log(sample);