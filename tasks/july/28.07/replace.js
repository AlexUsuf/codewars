var removeVowels = function(str){
    return str.replace(/[aeuio]/gi, '');
}

module.exports = removeVowels;