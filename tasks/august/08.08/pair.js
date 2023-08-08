function numberOfPairs(gloves)
{
  let res = 0;
  const object = {};
  for(const x of gloves) {
    if(object[x] === undefined) {
      object[x] = 0;
    }
    object[x] += 1;
    if (object[x] === 2) {
      res += 1;
      object[x] = 0;
    }
  }
  return res;
}

module.exports = numberOfPairs;