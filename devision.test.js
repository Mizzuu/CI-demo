const { devision } = require("./devision");

test("16 / 2 = 8", () => {
    expect(devision(16, 2)).toBe(8);
});

test.skip("28 / 7 = 4", () => {
    expect(devision(28, 7)).toBe(4);
});
