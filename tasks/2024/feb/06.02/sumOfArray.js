function repeats(arr) {
    const countObject = {};
    let result = 0;
    for (const x of arr) {
        if (countObject[x] === undefined) {
            countObject[x] = 0;
        }
        countObject[x] += 1;
    }
    for (const x in countObject) {
        if (countObject[x] == 1) {
            result += +x;
        }
    }
    return result;
}

module.exports = repeats;