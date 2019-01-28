import Solution from "./Solution";

test("sum of even-valued term under 100 should be 44", () => {
  const solution = new Solution();
  expect(solution.solve(100)).toBe(44);
});

test("sum of even-valued term under 4000000 should be 4613732", () => {
  const solution = new Solution();
  expect(solution.solve(4000000)).toBe(4613732);
});
