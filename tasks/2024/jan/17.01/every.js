function all(arr, fun) {
    return arr.every(el => fun(el))
}

module.exports = all;