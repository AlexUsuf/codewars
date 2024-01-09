function findOdd(A) {
    if(A.length === 1) {
      return A[0];
    }
    const object = {};
    for(const x of A) {
      if(object[x] == undefined) {
        object[x] = 1;
      }
      else{
        object[x] ++;
      }
    }
    for(const y in object) {
      if(object[y] % 2 !== 0) {
        return +y;
      }
    }
  }

 module.exports = findOdd;