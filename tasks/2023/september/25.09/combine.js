function combine(...arrays) {
    const object = {};
    for (const arr of arrays) {
        for (const el in arr) {
            if (object[el] === undefined) {
                object[el] = 0;
            }
            object[el] += arr[el]
        }
    }
    return object;
}

module.exports = combine;