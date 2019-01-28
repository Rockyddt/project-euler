class Solution {
    public solve(n: number): number {
        const numbers = [] as number[];
        for (let i = 0; i < n; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                numbers.push(i);
            }
        }
        return numbers.reduce((acc, current) => {
            return acc + current;
        });
    }
}

export default Solution;
