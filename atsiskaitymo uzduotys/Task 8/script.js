/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {

    this.sum = function (a, b) {
      return a + b;
    };
  
    
    this.subtraction = function (a, b) {
      return a - b;
    };
  

    this.multiplication = function (a, b) {
      return a * b;
    };
  
    
    this.division = function (a, b) {
      
      if (b === 0) {
        return "Error: Cannot divide by zero";
      } else {
        return a / b;
      }
    };
  }
  
  
  const calculator = new Calculator();
  
  
  console.log(calculator.sum(5, 3)); 
  console.log(calculator.subtraction(10, 4));
  console.log(calculator.multiplication(6, 2)); 
  console.log(calculator.division(8, 2)); 
  console.log(calculator.division(5, 0)); 
  