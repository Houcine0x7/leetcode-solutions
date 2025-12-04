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

console.log(removeDuplicates([0]));
console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

// K = 1; i = 1; if(nums[1] = 1 !== nums[0] = 1); nums[k] = 1 = nums[1] = 1; k++
// K = 1; i = 1; if(nums[1] = 1 !== nums[0] = 1); nums[k] = 1 = nums[1] = 1; k++
// return k = 2