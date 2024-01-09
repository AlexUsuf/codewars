var isSquare = function(n){
    return n < 0 ? false : !Number.isInteger(n ** 0.5) ? false : n ** 0.5 * n ** 0.5 === n;
}


module.exports = isSquare;