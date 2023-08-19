function allContinents(list) {
    const arr = [];
    list.map(el => arr.push(el.continent));
    return [...new Set(arr)].length === 5;
}

module.exports = allContinents;