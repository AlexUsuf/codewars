function uniq(arr) {
    const obj = {};
    for(const check of arr) {
        if (obj[check] === undefined) {
            obj[check] = 0;
        }
        obj[check]++
    }
    for(const x in obj) {
        if(obj[x] === 1) {
            return x;
        }
    }
}
module.exports = uniq;