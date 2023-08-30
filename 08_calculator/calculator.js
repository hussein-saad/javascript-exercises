const add = function(a,b) {
    return a + b;
};

const subtract = function(a,b) {
    return a - b;  
};

const sum = function(arr) {  
    let tot = 0;
    for (let  i = 0;i < arr.length;i++)
      tot += arr[i];
    return tot;
};

const multiply = function(arr) {
    let tot = 1;
    for (let i = 0; i < arr.length; i++) {
      tot *= arr[i];
    }
    return tot;
};

const power = function(a,b) {
    return a ** b;
};

const factorial = function(a) {
    let fact = 1;
    for (let i = 1; i <= a; i++) {
      fact *= i;
    }
    return fact;	
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
