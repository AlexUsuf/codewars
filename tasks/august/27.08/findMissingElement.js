function findMissing(arr1, arr2) {
    if(arr1 === undefined || arr2 === undefined) {
        return false;
    }
    const obj1 = {};
    const obj2 = {};
    if (arr2.length === 0) {
        return arr1[0];
    }
    for (const x of arr1) {
        if (!arr2.includes(x)) {
            return x;
        }
    }
    for (const x of arr1) {
        if (obj1[x] === undefined) {
            obj1[x] = 0;
        }
        obj1[x] += 1;
    }
    for (const x of arr2) {
        if (obj2[x] === undefined) {
            obj2[x] = 0;
        }
        obj1[x] += 1;
    }

    for (const check in obj1) {
        if (obj1[check] !== obj2[check]) {
            return +check;
        }
    }
}

module.exports = findMissing;