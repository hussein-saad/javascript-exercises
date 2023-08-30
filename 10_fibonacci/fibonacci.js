const fibonacci = function(n) {
    
    if (n < 0) 
        return "OOPS";

    let a = 1,b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return a;
};


// Do not edit below this line
module.exports = fibonacci;
