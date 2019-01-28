class Solution {

    public solve(dig: number): number {
        const min = Math.pow(10, dig - 1);
        const max = Math.pow(10, dig);
        let maxPar = 0;

        for (let i = min; i < max; i++) {
            for (let j = i; j < max; j++) {
                const newP = i * j;
                if (this.isPalindrome(newP)) {
                    maxPar = Math.max(newP, maxPar);
                }
            }
        }

        return maxPar;
    }

    public isPalindrome(n: number): boolean {
        const str = n.toString();
        for(let i = 0; i < str.length / 2; i++){
            if(str.charAt(i) !== str.charAt(str.length - i - 1)){
                return false;
            }
        }
        return true;
    }
}

export default Solution;
