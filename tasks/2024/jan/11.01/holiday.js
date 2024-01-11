function seaSick(x) {
    const twentyPercent = x.length / 5;
    let count = 0;
    for (let i = 0; i < x.length - 1; i++) {
        if (x[i] !== x[i + 1]) {
            count += 1;
        }
    }
    if (count > twentyPercent) {
        return 'Throw Up';
    }
    return 'No Problem';
}


module.exports = seaSick;