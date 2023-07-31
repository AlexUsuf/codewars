function maxMultiple(divisor, bound){
    let res = 0;
    for(let i = bound; i > 0; i--) {
      if(i % divisor === 0) {
        return i;
      }
    }
  }

  module.exports = maxMultiple;