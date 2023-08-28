const sumAll = function() {
  
    if (typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number')
        return 'ERROR';

    if (arguments[0] < 0 || arguments[1] < 0)
        return 'ERROR';
    
    let sum = 0;
    let min = Math.min(arguments[0], arguments[1]);
    let max = Math.max(arguments[0], arguments[1]);

    sum += max*(max+1)/2;
    min--;
    sum += min*(min+1)/2;
    
    return sum;  
};

// Do not edit below this line
module.exports = sumAll;
