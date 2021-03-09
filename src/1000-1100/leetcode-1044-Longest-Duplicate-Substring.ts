/*
Given a string s, consider all duplicated substrings:
(contiguous) substrings of s that occur 2 or more times. 
The occurrences may overlap.

Return any duplicated substring that has the longest possible length. 
If s does not have a duplicated substring, the answer is "".

Example 1:
Input: s = "banana"
Output: "ana"

Example 2:
Input: s = "abcd"
Output: ""

Constraints:
2 <= s.length <= 3 * 104
s consists of lowercase English letters.

*/

export function longestDupSubstring(s: string): string {
  let longestSubStr = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let subStr = "";
      if (s[i] === s[j]) {
        console.log(s[i], s[j]);
        // Could be the start of the duplicate substring
        subStr += s[i];
        // Check the length of duplication
        for (let idx = 1; idx + j < s.length; idx++) {
          if (s[i + idx] === s[j + idx]) {
            subStr += s[i + idx];
          } else {
            break;
          }
        }
      } else {
        if (subStr.length > longestSubStr.length) longestSubStr = subStr;
      }
    }
  }
  return longestSubStr;
}

console.log(longestDupSubstring("bananaba"));
