function duplicateEncode(word){
    const wordLower = word.toLowerCase();
    const obj = {};
    let result = '';
    for(const x of wordLower) {
      if(obj[x] === undefined) {
        obj[x] = 0;
      }
      obj[x] += 1;
    }
    
    for(const x of wordLower) {
      if(obj[x] === 1) {
        result += '(';
      }
      else{
        result += ')';
      }
    }
    return result;
  }