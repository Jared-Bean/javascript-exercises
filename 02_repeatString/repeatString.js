const repeatString = function(s, times) {
    if (times < 0) return "ERROR";
    let result = "";
    for (let i = 0; i < times; i++)
    {
        result += s;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
