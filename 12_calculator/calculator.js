const add = function(a, b) {
  return a + b	
};

const subtract = function(a, b) {
  return a - b		
};

const sum = function(arr) {
  return arr.reduce((sumTotal, numberItem) => sumTotal+numberItem, 0)
	
};

const multiply = function(arr) {
  return arr.reduce((multTotal, numberItem) => multTotal*numberItem, 1)
};

const power = function(number, power) {
  return number ** power	
};

const factorial = function(numero) {
  if ((numero === 0) || (numero === 1)) {
    return 1;
  } else if (numero > 1 ){
    let fatorial = 1

    for(i = numero; i > 1; i--){
      fatorial = fatorial * i;
    }
    return fatorial;
  }

  
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
