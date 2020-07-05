const math = require('./math.js');

test("Add method", () => {
    expect(math.add(0.1, 0.2)).toBe(0.3);
    expect(math.sum([1, 2, 3])).toBe(6);
});
