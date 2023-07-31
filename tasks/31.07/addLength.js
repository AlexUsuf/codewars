function addLength(str) {
    const arr = str.split(' ');
    const res = arr.map(el => el += ` ${el.length}`);
    return res;
}
  
module.exports = addLength;