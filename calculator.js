class Calculator {
    constructor(result){
      this.result = 0
    }
  
    add(number) {
      this.result+=number
    }
  
    subtract(number) {
      this.result-=number
    }
  
    multiply(number) {
      this.result*=number
    }
  
    divide(number) {
      if (number !== 0) {
        this.result /= number;
      } else {
        throw new Error();
      }
    }
  
    calculate(str){
      str = str.replace(/\s+/g, '');
    
    
      if (str.includes('/0')) {
        throw new Error('Division by zero');
      }
      
      else{
        let ans = eval(str);
      
        this.result = ans
      }
      
      
    }
  
    clear(number){
      this.result = 0;
    }
  
    getResult(){
      return this.result
    }
      
    
}

const calculator = new Calculator();
calculator.add(5);
calculator.add(3);
calculator.subtract(4);
console.log(calculator.getResult());
calculator.clear();
calculator.add(4);
calculator.subtract(4);
console.log(calculator.getResult());
calculator.clear();
calculator.calculate('2+3+5-9')
console.log(calculator.getResult());