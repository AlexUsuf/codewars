function zipWith(fn, a0, a1) {
    const result = [];
    for (let i = 0; i < Math.max(a0.length, a1.length); i++) {
        if (a0[i] === undefined || a1[i] === undefined) {
            break;
        }
        result.push(fn(a0[i], a1[i]));
    }
    return result;
}

module.exports = zipWith;