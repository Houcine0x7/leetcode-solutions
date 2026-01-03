// Typescript
// 448. Find All Numbers Disappeared in an Array
// Easy | Array & Hash Table
// Time | complexity : O(n)
// Space | complexity : O(n)

function findDisappearedNumbers(nums: number[]): number[] {
    const seen = new Set<number>();
    const result: number[] = [];

    // Step 1: Add all numbers to the set
    for(const num of nums){
        seen.add(num)
    } 

    // Step 2: Check which numbers are missing
    for(let i = 1; i<=nums.length; i++){
        if(!seen.has(i)){
            result.push(i)
        }
    }
    return result
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])) // Output [5,6]
console.log(findDisappearedNumbers([1,1])) // Output [2]
