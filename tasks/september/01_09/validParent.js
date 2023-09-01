function validParentheses(parenStr) {
    if (parenStr[0] === ')') {
        return false;
    }
    let count = 0;
    for (const x of parenStr) {
        if (x === '(') {
            count += 1;
        }
        else {
            count -= 1;
        }
        if (count < 0) {
            return false;
        }
    }
    return count === 0;
}

module.exports = validParentheses;