const reverseString = function(s) {
    if (s == "") return "";
    let result = ""
    for (let i = s.length - 1; i >= 0; i--)
    {
        result+= s[i]; 
    }
    return result;

};

// Do not edit below this line
module.exports = reverseString;
