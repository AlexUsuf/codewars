function hotSingles(arr1, arr2) {
    arr1 = [... new Set(arr1)];
    arr2 = [... new Set(arr2)];
    const res = [...arr1.filter(el => !arr2.includes(el)), arr2.filter(el => !arr1.includes(el))]
    return [].concat(...res);
}

module.exports = hotSingles;