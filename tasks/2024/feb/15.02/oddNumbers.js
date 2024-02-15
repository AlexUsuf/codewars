function oddOnesOut(nums) {
    const count_obj = {};
    const result = [];
    for (const x of nums) {
        if (count_obj[x] === undefined) {
            count_obj[x] = 0;
        }
        count_obj[x] += 1;
    }
    for (const x of nums) {
        if (count_obj[x] % 2 === 0) {
            result.push(x);
        }
    }
    return result;
}

module.exports = oddOnesOut;