// Typescript
// 1. Two Sum
// Easy | Arry & Hash Set 
// Time | complexity : O(n)
// Space | complexity : O(n)

function twoSum(nums: number[], target: number): number[] {
    let map: Map<number, number> = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
        let complement: number = target - nums[i]
        if (map.has(complement)){
            return [map.get(complement)!, i]
        }
        map.set(nums[i], i)
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9)) // Output: [0, 1]
console.log(twoSum([3,2,4], 6)) // Output: [1, 2]
console.log(twoSum([3,3], 6)) // Output: [0, 1]
