//CALCULADORA

let num1 = parseInt(prompt('Ingrese el primer numero'));
let num2 = parseInt(prompt('Ingrese el segundo numero'));
let operacion = prompt ('Ingrese la operacion que desea realizar');
let resultado = 0;

switch (operacion) {
  case '+': 
    resultado = num1 + num2;
    console.log(`el resultado de ${num1} ${operacion} ${num2} es ${resultado}`);
    break;
  case '-':
    resultado = num1 - num2;
    console.log(`el resultado de ${num1} ${operacion} ${num2} es ${resultado}`);
    break;
  case '*':
    resultado = num1 * num2;
    console.log(`el resultado de ${num1} ${operacion} ${num2} es ${resultado}`);
    break;
  case '/':
    resultado = num1 / num2;
    console.log(`el resultado de ${num1} ${operacion} ${num2} es ${resultado}`);
    break;
  default:
    alert("esto no es una operacion matematica");
    break;
}