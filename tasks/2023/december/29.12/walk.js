function isValidWalk(walk) {
    const obj = {};
    for (const x of walk) {
        if (obj[x] === undefined) {
            obj[x] = 0;
        }
        obj[x] += 1;
    }
    const result = walk.length === 10 && obj.n === obj.s && obj.e === obj.w;
    return result;
}

module.exports = isValidWalk;