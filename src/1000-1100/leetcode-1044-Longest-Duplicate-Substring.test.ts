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
import { longestDupSubstring } from "./leetcode-1044-Longest-Duplicate-Substring";

test("Example 1: ", () => {
  expect(longestDupSubstring("banana")).toEqual("ana");
});
test("Example 2: ", () => {
  expect(longestDupSubstring("abcd")).toEqual("");
});
test("Example 2: ", () => {
  expect(
    longestDupSubstring(
      "Doyouknowifthisisallthereislongstringisisisisisislongstring?"
    )
  ).toEqual("longstring");
});
