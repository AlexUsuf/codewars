function findUnique(numbers) {
    const obj = {};
    for (const check of numbers) {
        if (obj[check] === undefined) {
            obj[check] = 0;
        }
        obj[check] += 1;
    }
    for (const check in obj) {
        if (obj[check] === 1) {
            return +check;
        }
    }
}

module.exports = findUnique;