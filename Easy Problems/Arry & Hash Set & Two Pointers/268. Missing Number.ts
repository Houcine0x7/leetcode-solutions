// Typescript
// 268. Missing Number
// Easy | Array & Math
// Time | complexity : O(n)
// Space | complexity : O(1)

function missingNumber(nums: number[]): number {
    let aSum: number = 0;
    let n : number = nums.length;
    let gSum :number = (n*(n+1))/2;
    for(let num of nums){
        aSum += num;
    }
    return gSum - aSum
};

console.log(missingNumber([3,0,1])); // Output: 2
console.log(missingNumber([0,1])); // Output: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Output: 8
