function pluck(objs, name) {
    return objs.map(el => el[name])
}

module.exports = pluck;