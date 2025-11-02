// Typescript
// 1672. Richest Customer Wealth
// Easy | Array

function maximumWealth(accounts: number[][]): number {
    let Biggest_total: number = 0
    for (let i = 0; i<accounts.length; i++){
        let current_total : number = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            current_total += accounts[i][j]
            if(Biggest_total<current_total){
                Biggest_total = current_total
            };
        };
    };
    return Biggest_total
};

console.log(maximumWealth([[1,2,3],[3,2,1]]));
console.log(maximumWealth([[1,5],[7,3],[3,5]]));
console.log(maximumWealth([[2,8,7],[1,9,5]]));

