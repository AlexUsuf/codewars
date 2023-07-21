function highAndLow(n){
    return `${Math.max(...n.split(' '))} ${Math.min(...n.split(' '))}`
}

module.exports = highAndLow;
