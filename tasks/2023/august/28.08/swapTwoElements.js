function swapTwo(array, a, b) {
    const result = [];
    let countA = 0;
    let countB = 0;
    const arrayB = array.filter(el => el === b).length;
    for (const x of array) {
        if (x === a) {
            if (countA === 0) {
                result.push(b);
            }
            else {
                result.push(a);
            }
            countA += 1;
        }
        else if (x === b) {
            countB += 1;
            if (countB === arrayB) {
                result.push(a);
            }
            else {
                result.push(b);
            }
        }
        else {
            result.push(x);
        }
    }
    return result;
}


module.exports = swapTwo;