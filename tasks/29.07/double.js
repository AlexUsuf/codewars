function duplicateCount(text){
    text = text.toLowerCase();
    const object = {};
    for(const x of text) {
      if(object[x] === undefined) {
        object[x] = 0;
      }
      object[x] += 1;
    }
    return Object.values(object).filter(el => el > 1).length;
}


module.exports = duplicateCount;
