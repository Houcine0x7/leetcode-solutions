// Typescript
// 217. Contains Duplicate
// Easy | Array & Hash Set
// Time | complexity : O(n)
// Space | complexity : O(n)

function containsDuplicate(nums: number[]): boolean {
    let numberSet: Set<number> = new Set<number>();
    for (const num of nums){
        if(numberSet.has(num)){
            return true;
        }
        numberSet.add(num);
    }
    return false
}

console.log(containsDuplicate([1,2,3,1])) // Output: true
console.log(containsDuplicate([1,2,3,4])) // Output: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) // Output: true

