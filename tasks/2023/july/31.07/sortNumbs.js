function solution(nums){
    return nums ? nums.sort((a, b) => a - b, 0) : [];
}

module.exports = solution;