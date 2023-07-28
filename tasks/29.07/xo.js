function XO(str) {
    if(str === ''){
      return true;
    }
    str = str.toLowerCase().match(/[xo]/gi);
    const obj = {'x': 0, 'o': 0};
    for(const x of str) {
      obj[x] += 1;
    }
    return obj['x'] === obj['o'];
}

module.exports = XO;