import Solution from "./Solution";

test("max prime factor of 13195 should be 29", () => {
    const solution = new Solution();
    expect(solution.solve(13195)).toBe(29);
});

test("sum of even-valued term under 600851475143 should be 6857", () => {
    const solution = new Solution();
    expect(solution.solve(600851475143)).toBe(6857);
});
