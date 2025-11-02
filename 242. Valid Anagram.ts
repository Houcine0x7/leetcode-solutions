// Typescript
// 242. Valid Anagram
// Easy | String

function isAnagram(s: string, t: string): boolean {
    return s.split("").sort().join("") === t.split("").sort().join("")
};

console.log(isAnagram("cat", "rat"))
console.log(isAnagram("anagram", "nagaram"))
