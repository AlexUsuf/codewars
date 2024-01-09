const squareSum = (nums) => nums.map(el => el ** 2).reduce((a, b) => a + b, 0);



module.exports = squareSum;