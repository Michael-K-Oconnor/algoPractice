var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) return s.length;
  let longest = 1;
  let set = new Set();
  let lastIdx = 1;
  for (let i = 0; i < s.length; i++) {
    set.add(s[i]);
    for (let j = Math.max(i + 1, lastIdx + 1); j < s.length; j++) {
      // console.log(set, i, j);
      if (!set.has(s[j])) {
        lastIdx++;
        set.add(s[j]);
        longest = Math.max(longest, set.size);
      } else {
        break;
      }
    }
    set.delete(s[i]);
  }
  return longest;
};

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("aabaab!bb"));
console.log(lengthOfLongestSubstring("bbtablud"));
