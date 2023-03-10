/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
  this.sum = function () {
    return a + b;
  };
  this.subtraction = function () {
    return a - b;
  };
  this.multiplication = function () {
    return a * b;
  };
  this.division = function () {
    return a / b;
  };
}

const myNumbers = new Calculator(12, 24);

console.log(myNumbers.sum());
console.log(myNumbers.subtraction());
console.log(myNumbers.multiplication());
console.log(myNumbers.division());
