function duplicateEncode(word){
    const wordLowerCase = word.toLowerCase();
    const obj = {};
    let result = '';
    const arrayWord = wordLowerCase.split('')
    for(const letter of arrayWord) {
      if(obj[letter] === undefined) {
        obj[letter] = 0;
      }
      obj[letter] += 1;
    }
    for(const checked of arrayWord) {
      if(obj[checked] !== 1) {
        result += ')';
      }
      else{
        result += '(';
      }
    }
    return result;
  }

module.exports = duplicateEncode;