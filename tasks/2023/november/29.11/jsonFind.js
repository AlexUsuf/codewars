function getCharacters(obj, key, val) {
    const lowerValue = val.toLowerCase();
    return obj.characters.filter(el => el[key] && lowerValue === el[key].toLowerCase());
}



