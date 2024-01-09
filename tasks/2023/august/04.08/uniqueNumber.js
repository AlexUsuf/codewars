function findUniq(arr) {
    const object = {};
    for(const x of arr) {
      if(object[x] === undefined) {
        object[x] = 0;
      }
      object[x] += 1;
    }
    for(const y in object) {
      if(object[y] === 1) {
        return +y;
      }
    }
}

module.exports = findUniq;