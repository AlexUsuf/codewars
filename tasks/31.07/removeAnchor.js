function removeUrlAnchor(url){
    if(url.split('').includes('#')) {
      let index = url.split('').findIndex(el => el === '#');
      return url.slice(0, index);
    }
    return url
}

module.exports = removeUrlAnchor;