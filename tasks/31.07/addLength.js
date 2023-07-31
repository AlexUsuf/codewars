function addLength(str) {
    return str.split(' ').map(el => el += ` ${el.length}`)
}
  

module.exports = addLength;