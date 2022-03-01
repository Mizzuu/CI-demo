const { devision } = require("./devision");

test.each([
    [4, 2, 2],
    [5, 1, 5],
    [42, 6, 7],
])("a / b = c", (a, b, expected) => {
    expect(devision(a, b)).toBe(expected);
});
