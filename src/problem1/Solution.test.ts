import Solution from "./Solution";

test('multiples below 10 should be 23', ()=>{
    let solution = new Solution();
    expect(solution.solve(10)).toBe(23);
});

test('multiples below 1000 should be 233168', ()=>{
    let solution = new Solution();
    expect(solution.solve(1000)).toBe(233168);
});
