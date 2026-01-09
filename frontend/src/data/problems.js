export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: [
        "You must do this by modifying the input array in-place with O(1) extra memory.",
      ],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: [
        "Given a string s, return true if it is a palindrome, or false otherwise.",
      ],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 2 * 10⁵",
      "s consists only of printable ASCII characters",
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },
  "move-zeroes": {
    id: "move-zeroes",
    title: "Move Zeroes",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Move all zeroes to the end while maintaining the order of non-zero elements.",
      notes: ["Do it in-place."],
    },
    examples: [{ input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" }],
    constraints: ["1 ≤ nums.length ≤ 10⁴"],
    starterCode: {
      javascript: `function moveZeroes(nums) {}`,
      python: `def moveZeroes(nums): pass`,
      java: `class Solution { public void moveZeroes(int[] nums) {} }`,
    },
    expectedOutput: {
      javascript: "[1,3,12,0,0]",
      python: "[1,3,12,0,0]",
      java: "[1,3,12,0,0]",
    },
  },
  "reverse-linked-list": {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Linked List",
    description: {
      text: "Reverse a singly linked list.",
      notes: ["You may reverse iteratively or recursively."],
    },
    examples: [{ input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" }],
    constraints: ["1 ≤ nodes ≤ 5000"],
    starterCode: {
      javascript: `function reverseList(head) {}`,
      python: `def reverseList(head): pass`,
      java: `class Solution { public ListNode reverseList(ListNode head) { return null; } }`,
    },
    expectedOutput: {
      javascript: "[5,4,3,2,1]",
      python: "[5,4,3,2,1]",
      java: "[5,4,3,2,1]",
    },
  },
  "maximum-depth-binary-tree": {
    id: "maximum-depth-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "Find the maximum depth of a binary tree.",
      notes: ["Depth is the number of nodes along the longest path."],
    },
    examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "3" }],
    constraints: ["0 ≤ nodes ≤ 10⁴"],
    starterCode: {
      javascript: `function maxDepth(root) {}`,
      python: `def maxDepth(root): pass`,
      java: `class Solution { public int maxDepth(TreeNode root) { return 0; } }`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
    },
  },
  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack • String",
    description: {
      text: "Determine if the input string has valid parentheses.",
      notes: ["Every opening must have a closing match."],
    },
    examples: [{ input: "s = '()[]{}'", output: "true" }],
    constraints: ["1 ≤ s.length ≤ 10⁴"],
    starterCode: {
      javascript: `function isValid(s) {}`,
      python: `def isValid(s): pass`,
      java: `class Solution { public boolean isValid(String s) { return false; } }`,
    },
    expectedOutput: {
      javascript: "true",
      python: "true",
      java: "true",
    },
  },
  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "DP",
    description: {
      text: "Count the number of ways to climb to the top.",
      notes: ["You can climb 1 or 2 steps."],
    },
    examples: [{ input: "n = 3", output: "3" }],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {}`,
      python: `def climbStairs(n): pass`,
      java: `class Solution { public int climbStairs(int n) { return 0; } }`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
    },
  },
  "longest-substring-without-repeating": {
    id: "longest-substring-without-repeating",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Find the length of the longest substring without repeating characters.",
      notes: ["Use sliding window technique."],
    },
    examples: [{ input: "s = 'abcabcbb'", output: "3" }],
    constraints: ["0 ≤ s.length ≤ 5*10⁴"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {}`,
      python: `def lengthOfLongestSubstring(s): pass`,
      java: `class Solution { public int lengthOfLongestSubstring(String s) { return 0; } }`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
    },
  },

  "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists",
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    category: "Heap • Linked List",
    description: {
      text: "Merge k sorted linked lists into one sorted list.",
      notes: ["Use a priority queue."],
    },
    examples: [
      { input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" },
    ],
    constraints: ["k ≤ 10⁴"],
    starterCode: {
      javascript: `function mergeKLists(lists) {}`,
      python: `def mergeKLists(lists): pass`,
      java: `class Solution { public ListNode mergeKLists(ListNode[] lists) { return null; } }`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4,5,6]",
      python: "[1,1,2,3,4,4,5,6]",
      java: "[1,1,2,3,4,4,5,6]",
    },
  },
  "three-sum": {
    id: "three-sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums, return all the triplets such that nums[i] + nums[j] + nums[k] == 0.",
      notes: [
        "Triplets must be unique.",
        "The solution set must not contain duplicate triplets.",
      ],
    },
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
      },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here
}`,
      python: `def threeSum(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "[[-1,-1,2],[-1,0,1]]",
      python: "[[-1,-1,2],[-1,0,1]]",
      java: "[[-1,-1,2],[-1,0,1]]",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix",
    description: {
      text: "Return an array where each element is the product of all elements except itself.",
      notes: ["Do not use division.", "Run in O(n) time."],
    },
    examples: [{ input: "nums = [1,2,3,4]", output: "[24,12,8,6]" }],
    constraints: ["2 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {}`,
      python: `def productExceptSelf(nums): pass`,
      java: `class Solution { public int[] productExceptSelf(int[] nums) { return null; } }`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]",
      python: "[24,12,8,6]",
      java: "[24,12,8,6]",
    },
  },

  "search-in-rotated-array": {
    id: "search-in-rotated-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Binary Search",
    description: {
      text: "Search for a target in a rotated sorted array.",
      notes: ["Return -1 if not found."],
    },
    examples: [{ input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" }],
    constraints: ["1 ≤ nums.length ≤ 5000"],
    starterCode: {
      javascript: `function search(nums, target) {}`,
      python: `def search(nums, target): pass`,
      java: `class Solution { public int search(int[] nums, int target) { return 0; } }`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
    },
  },

  "find-min-rotated-array": {
    id: "find-min-rotated-array",
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Binary Search",
    description: {
      text: "Find the minimum element in a rotated sorted array.",
      notes: ["Use binary search for O(log n)."],
    },
    examples: [{ input: "nums = [3,4,5,1,2]", output: "1" }],
    constraints: ["1 ≤ nums.length ≤ 5000"],
    starterCode: {
      javascript: `function findMin(nums) {}`,
      python: `def findMin(nums): pass`,
      java: `class Solution { public int findMin(int[] nums) { return 0; } }`,
    },
    expectedOutput: {
      javascript: "1",
      python: "1",
      java: "1",
    },
  },

  "max-subarray": {
    id: "max-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • DP",
    description: {
      text: "Find the contiguous subarray with the largest sum.",
      notes: ["Use Kadane’s Algorithm."],
    },
    examples: [{ input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6" }],
    constraints: ["1 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function maxSubArray(nums) {}`,
      python: `def maxSubArray(nums): pass`,
      java: `class Solution { public int maxSubArray(int[] nums) { return 0; } }`,
    },
    expectedOutput: {
      javascript: "6",
      python: "6",
      java: "6",
    },
  },

  "remove-duplicates-sorted-array": {
    id: "remove-duplicates-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Remove duplicates in-place from a sorted array.",
      notes: ["Return the new length."],
    },
    examples: [{ input: "nums = [1,1,2]", output: "2" }],
    constraints: ["1 ≤ nums.length ≤ 3*10⁴"],
    starterCode: {
      javascript: `function removeDuplicates(nums) {}`,
      python: `def removeDuplicates(nums): pass`,
      java: `class Solution { public int removeDuplicates(int[] nums) { return 0; } }`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  "merge-intervals": {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Intervals",
    description: {
      text: "Merge all overlapping intervals.",
      notes: ["Sort intervals by start time."],
    },
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      },
    ],
    constraints: ["1 ≤ intervals.length ≤ 10⁴"],
    starterCode: {
      javascript: `function merge(intervals) {}`,
      python: `def merge(intervals): pass`,
      java: `class Solution { public int[][] merge(int[][] intervals) { return null; } }`,
    },
    expectedOutput: {
      javascript: "[[1,6],[8,10],[15,18]]",
      python: "[[1,6],[8,10],[15,18]]",
      java: "[[1,6],[8,10],[15,18]]",
    },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Check if two strings are anagrams.",
      notes: ["Both strings must have same character counts."],
    },
    examples: [{ input: "s = 'anagram', t = 'nagaram'", output: "true" }],
    constraints: ["1 ≤ s.length ≤ 5*10⁴"],
    starterCode: {
      javascript: `function isAnagram(s, t) {}`,
      python: `def isAnagram(s, t): pass`,
      java: `class Solution { public boolean isAnagram(String s, String t) { return false; } }`,
    },
    expectedOutput: {
      javascript: "true",
      python: "true",
      java: "true",
    },
  },
  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers",
    description: {
      text: "Given n non-negative integers representing an elevation map, compute how much water it can trap after raining.",
      notes: [
        "Use two pointers or prefix/suffix max arrays.",
        "Time complexity should be O(n).",
      ],
    },
    examples: [{ input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" }],
    constraints: ["1 ≤ height.length ≤ 2*10⁴"],
    starterCode: {
      javascript: `function trap(height) {}`,
      python: `def trap(height): pass`,
      java: `class Solution { public int trap(int[] height) { return 0; } }`,
    },
    expectedOutput: { javascript: "6", python: "6", java: "6" },
  },

  "median-of-two-sorted-arrays": {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Binary Search",
    description: {
      text: "Find the median of two sorted arrays in O(log(m+n)) time.",
      notes: ["Do not merge the arrays."],
    },
    examples: [{ input: "nums1 = [1,3], nums2 = [2]", output: "2.0" }],
    constraints: ["0 ≤ m,n ≤ 1000"],
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {}`,
      python: `def findMedianSortedArrays(nums1, nums2): pass`,
      java: `class Solution { public double findMedianSortedArrays(int[] a, int[] b) { return 0; } }`,
    },
    expectedOutput: { javascript: "2.0", python: "2.0", java: "2.0" },
  },

  "largest-rectangle-histogram": {
    id: "largest-rectangle-histogram",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    category: "Stack",
    description: {
      text: "Find the largest rectangle that can be formed in a histogram.",
      notes: ["Use monotonic stack."],
    },
    examples: [{ input: "heights = [2,1,5,6,2,3]", output: "10" }],
    constraints: ["1 ≤ heights.length ≤ 10⁵"],
    starterCode: {
      javascript: `function largestRectangleArea(heights) {}`,
      python: `def largestRectangleArea(heights): pass`,
      java: `class Solution { public int largestRectangleArea(int[] heights) { return 0; } }`,
    },
    expectedOutput: { javascript: "10", python: "10", java: "10" },
  },

  "minimum-window-substring": {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    category: "Sliding Window • String",
    description: {
      text: "Find the minimum window in s which contains all characters of t.",
      notes: ["Use two pointers + frequency map."],
    },
    examples: [{ input: "s = 'ADOBECODEBANC', t = 'ABC'", output: "'BANC'" }],
    constraints: ["1 ≤ s,t ≤ 10⁵"],
    starterCode: {
      javascript: `function minWindow(s, t) {}`,
      python: `def minWindow(s, t): pass`,
      java: `class Solution { public String minWindow(String s, String t) { return ""; } }`,
    },
    expectedOutput: {
      javascript: "BANC",
      python: "BANC",
      java: "BANC",
    },
  },

  "word-ladder-ii": {
    id: "word-ladder-ii",
    title: "Word Ladder II",
    difficulty: "Hard",
    category: "Graph • BFS",
    description: {
      text: "Find all shortest transformation sequences from beginWord to endWord.",
      notes: ["Each transformation changes one letter."],
    },
    examples: [
      {
        input: "beginWord='hit', endWord='cog'",
        output: "[['hit','hot','dot','dog','cog']]",
      },
    ],
    constraints: ["1 ≤ wordList.length ≤ 5000"],
    starterCode: {
      javascript: `function findLadders(beginWord, endWord, wordList) {}`,
      python: `def findLadders(beginWord, endWord, wordList): pass`,
      java: `class Solution { public List<List<String>> findLadders(String b, String e, List<String> w) { return null; } }`,
    },
    expectedOutput: {
      javascript: "[['hit','hot','dot','dog','cog']]",
      python: "[['hit','hot','dot','dog','cog']]",
      java: "[['hit','hot','dot','dog','cog']]",
    },
  },

  "edit-distance": {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "Hard",
    category: "DP • String",
    description: {
      text: "Find the minimum number of operations to convert word1 to word2.",
      notes: ["Operations: insert, delete, replace."],
    },
    examples: [{ input: "word1='horse', word2='ros'", output: "3" }],
    constraints: ["1 ≤ length ≤ 500"],
    starterCode: {
      javascript: `function minDistance(w1, w2) {}`,
      python: `def minDistance(w1, w2): pass`,
      java: `class Solution { public int minDistance(String w1, String w2) { return 0; } }`,
    },
    expectedOutput: { javascript: "3", python: "3", java: "3" },
  },

  "regular-expression-matching": {
    id: "regular-expression-matching",
    title: "Regular Expression Matching",
    difficulty: "Hard",
    category: "DP • String",
    description: {
      text: "Implement regex matching with support for '.' and '*'.",
      notes: ["Use DP for optimal solution."],
    },
    examples: [{ input: "s='aab', p='c*a*b'", output: "true" }],
    constraints: ["1 ≤ s,p ≤ 20"],
    starterCode: {
      javascript: `function isMatch(s, p) {}`,
      python: `def isMatch(s, p): pass`,
      java: `class Solution { public boolean isMatch(String s, String p) { return false; } }`,
    },
    expectedOutput: { javascript: "true", python: "true", java: "true" },
  },

  "n-queens": {
    id: "n-queens",
    title: "N-Queens",
    difficulty: "Hard",
    category: "Backtracking",
    description: {
      text: "Place n queens on an n×n board so no two queens attack each other.",
      notes: ["Return all distinct solutions."],
    },
    examples: [{ input: "n = 4", output: "[['.Q..','...Q','Q...','..Q.']]" }],
    constraints: ["1 ≤ n ≤ 9"],
    starterCode: {
      javascript: `function solveNQueens(n) {}`,
      python: `def solveNQueens(n): pass`,
      java: `class Solution { public List<List<String>> solveNQueens(int n) { return null; } }`,
    },
    expectedOutput: {
      javascript: "[['.Q..','...Q','Q...','..Q.']]",
      python: "[['.Q..','...Q','Q...','..Q.']]",
      java: "[['.Q..','...Q','Q...','..Q.']]",
    },
  },

  "maximal-rectangle": {
    id: "maximal-rectangle",
    title: "Maximal Rectangle",
    difficulty: "Hard",
    category: "Matrix • Stack",
    description: {
      text: "Find the largest rectangle containing only 1s in a binary matrix.",
      notes: ["Convert rows into histogram problem."],
    },
    examples: [{ input: "matrix = [[1,0,1,0,0],[1,0,1,1,1]]", output: "3" }],
    constraints: ["1 ≤ rows, cols ≤ 200"],
    starterCode: {
      javascript: `function maximalRectangle(matrix) {}`,
      python: `def maximalRectangle(matrix): pass`,
      java: `class Solution { public int maximalRectangle(char[][] matrix) { return 0; } }`,
    },
    expectedOutput: { javascript: "3", python: "3", java: "3" },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};
