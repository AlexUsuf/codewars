function disemvowel(str) {
    const array = ['a', 'e', 'o', 'u', 'i', 'A', 'E', 'O', 'U', 'I'];
    let result = '';
    for(const x of str) {
      if(!array.includes(x)) {
        result += x;
      }
    }
    return result;
  }

  module.exports = disemvowel;