function isIsogram(str){
    str = str.toLowerCase();
    const obj = {};
    for(const x of str) {
      if(obj[x] === undefined) {
        obj[x] = 0;
      }
      obj[x] += 1;
    }
    return Object.values(obj).every(x => x === 1);
  }


module.exports = isIsogram;