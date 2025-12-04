// Typescript
// 26. Remove Duplicates from Sorted Array
// Easy | Arry and two pointer
// Time | complexity : O(n)
// Space | complexity : O(1)

function removeDuplicates(nums: number[]): number {
    if (nums.length == 0) return 0

    let k: number = 1;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i - 1]){
            nums[k] = nums[i]
            k++
        } 
    }

    return k;
};

console.log(removeDuplicates([0])); // Output: 1
console.log(removeDuplicates([1,1,2])); // Output: 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // Output: 5