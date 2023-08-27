var maxSequence = function (arr) {
    if(!arr) {
        return false;
    }
    let current = 0;
    let maxValue = 0;
    for (const x of arr) {
        current += x;
        if (current < 0) {
            current = 0;
        }
        else if (current > maxValue) {
            maxValue = current;
        }
    }
    return maxValue || 0;
}

module.exports = maxSequence;