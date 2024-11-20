var a=6;
console.log(a)
{
    var a=10
    console.log(a)
}
console.log(a)

var romanToInt = function(s) {
    let obj={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let current = obj[s[i]];
        let next = obj[s[i + 1]];
        if (next > current) {
            total -= current;
        } else {
            total += current;
        }
    }
    return total
};

console.log(romanToInt('III'))