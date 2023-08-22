function meeting(x) {
    if(x === undefined) {
        return '';
    }
    return x.indexOf("O") !== -1 ? x.indexOf('O') : 'None available!';
}

module.exports = meeting;