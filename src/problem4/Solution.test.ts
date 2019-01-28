import Solution from "./Solution";

test("9009 is palindrome", () => {
    const solution = new Solution();
    const result = solution.isPalindrome(9009);
    expect(result).toBe(true);
});

test("largest palindrome which is product of two 2-digit numbers should be 9009", () => {
    const solution = new Solution();
    expect(solution.solve(2)).toBe(9009);
});

test("largest palindrome which is product of two 3-digit numbers should be 906609", () => {
    const solution = new Solution();
    expect(solution.solve(3)).toBe(906609);
});
