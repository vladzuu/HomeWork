class Calculator {
   constructor(startNum = 0) {
      this.startNum = startNum;
      this.result = this.startNum
   }
   plus(...num) {
      for (const arg of num) {
         this.result += arg
      }
      return this
   }
   minus(...num) {
      for (const arg of num) {
         this.result -= arg
      }
      return this
   }
   divide(...num) {
      for (const arg of num) {
         this.result /= arg
      }
      return this
   }
   multiple(...num) {
      for (const arg of num) {
         this.result *= arg
      }
      return this
   }

}
let sample = new Calculator(100);
sample.plus(5, 5, 5).minus(5, 5, 5).divide(2, 4, 5).multiple(2, 2, 3)
console.log(sample);