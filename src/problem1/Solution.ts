class Solution {
    constructor(){

    }

    solve (n: number): number{
        var numbers = [] as number[];
        for(var i = 0; i < n; i++){
            if(i % 3 == 0 || i % 5 == 0) {
                numbers.push(i);
            }
        }
        return numbers.reduce((acc, current)=>{
            return acc + current;
        });        
    }
}

export default Solution;