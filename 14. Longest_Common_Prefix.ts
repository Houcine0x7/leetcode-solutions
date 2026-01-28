// Typescript
// 14. Longest Common Prefix
// Easy | Arry


function longestCommonPrefix(strs: string[]): string {
    let prefix: string = ""
    for (let i = 0; i<strs[0].length; i++){
        for(let j = 0; j<strs.length; j++){
            if(strs[j][i] !== strs[0][i]){
              return  prefix
            }  
        }
        prefix+=strs[0][i]
    }
    return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"])) // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])) // Output: ""

