class Solution {
    public solve(n: number): number {
        let p1 = 1;
        let p2 = 1;
        let sum = 0;

        while (p1 + p2 < n) {
            const newValue = p1 + p2;
            sum += newValue % 2 === 0 ? newValue : 0;
            p1 = p2;
            p2 = newValue;
        }
        return sum;
    }
}

export default Solution;
