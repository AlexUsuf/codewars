function arrayDiff(a, b) {
    if(a.length === 0) {
      return [];
    }
    const res = [];
    let maxLength = Math.max(a.length, b.length);
    for(let i = 0; i < maxLength; i++) {
      if(b.includes(a[i])) {
        continue;
      }
      else {
        res.push(a[i])
      }
    }
    return res;
  }

  module.exports = arrayDiff;