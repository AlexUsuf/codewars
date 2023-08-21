function narcissistic(value) {
    if(value === undefined || value === null || value === NaN) {
        return false;
    }
    let result = 0;
    let string = value + '';
    for (let i = 0; i < string.length; i++) {
        result += Number(string[i]) ** string.length;
    }
    return result === value;
}

module.exports = narcissistic;