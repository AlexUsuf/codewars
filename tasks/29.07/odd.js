function findOutlier(integers){
    let res = 0;
    for(const x of integers) {
      if(x % 2 === 0) {
        res += 1;
      }
      if(res === 2) {
        return integers.find(el => el % 2 !== 0);
      }
    }
    return integers.find(el => el % 2 === 0);
  }


module.exports = findOutlier;