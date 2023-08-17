function isRubyComing(list) {
    return list.filter(develop => develop.language === "Ruby").length >= 1;
}

module.exports = isRubyComing;