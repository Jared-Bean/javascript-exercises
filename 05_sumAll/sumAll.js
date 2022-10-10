const sumAll = function(a, b) {
    if (typeof(a) != "number" || typeof(b) != "number") return "ERROR";
    if (a < 0 || b < 0) return "ERROR";
    result = 0;
    if (b < a) 
    {
        let temp = a;
        a = b;
        b = temp;
    }
    for (let i = a; i <= b; i++)
    {
        result += i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
