// Typescript
// 242. Valid Anagram
// Easy | String
// Time | complexity : O(n log n)
// Space | complexity : O(n)

function isAnagram(s: string, t: string): boolean {
    return s.split("").sort().join("") === t.split("").sort().join("")
};

console.log(isAnagram("cat", "rat")) // false
console.log(isAnagram("anagram", "nagaram")) // true

