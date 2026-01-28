// Typescript
// 27. Remove_Element
// Easy | Arry and two pointer
// Time | complexity : O(n)
// Space | complexity : O(1)

function removeElement(nums: number[], val: number): number {
     let k : number = 0

     for (let i = 0; i<nums.length; i++) {
        if(nums[i] !== val){
            nums[k] = nums[i]
            k++
        }
     }
     return k

};

console.log(removeElement([3,2,2,3],3)) // Output: 2
console.log(removeElement([0,1,2,2,3,0,4,2],2)) // Output: 5

