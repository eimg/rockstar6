function add(a, b) {
    return a + b;
}

function sum(nums) {
    return nums.reduce((a, b) => a + b);
}

module.exports = { add, sum };
