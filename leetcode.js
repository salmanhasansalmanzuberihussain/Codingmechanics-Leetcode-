//TOP 150 Interview questions

//#1 Two Sum
var twoSum = function (nums, target) {
  let storage = {};
  for (i = 0; i < nums.length; i++) {
    let val = nums[i];
    let wantedvalue = target - val;
    if (storage[wantedvalue] !== undefined) {
      return [storage[wantedvalue], i];
    } else {
      storage[val] = i;
    }
  }
};

//#13 Roman to Integer[Roman Numbers are represented by seven different symbols]
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let next = s[i + 1];

    if (map[current] < map[next]) {
      total -= map[current];
    } else {
      total += map[current];
    }
  }
  return total;
};

//14.Longest Common Prefix

//Solution 1
var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] != strs[j][i]) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
};

////Solution 2
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  for (i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix)) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

//20. Valid Parenteses
var isValid = function (s) {
  const map = { '{': '}', '(': ')', '[': ']' };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let val = s[i];
    if (map[val]) {
      stack.push(map[val]);
    } else if (stack.pop() != val) {
      return false;
    }
  }
  return !stack.length;
};

//21. Merge two sorted arrays
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let prev = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      prev.next = list1;
      prev = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      prev = list2;
      list2 = list2.next;
    }
  }
  if (!list1) {
    prev.next = list2;
  }
  if (!list2) {
    prev.next = list1;
  }
  return dummy.next;
};

//26. Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
  let index = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index] = nums[i + 1];
      index++;
    }
  }
  return index;
};

//66. Plus One
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};

//69. Sqrt(x)
var mySqrt = function (x) {
  let sqrt = 1;
  if (x === 0) {
    return 0;
  }

  for (let i = 1; i * i <= x; i++) {
    sqrt = i;
  }
  return sqrt;
};

//88. Merge Sorted Array
var merge = function (nums1, m, nums2, n) {
  first = m - 1;
  second = n - 1;
  i = nums1.length - 1;
  while (second >= 0) {
    fval = nums1[first];
    sval = nums2[second];
    if (fval >= sval) {
      nums1[i] = fval;
      first--;
      i--;
    } else {
      nums1[i] = sval;
      second--;
      i--;
    }
  }
};

//94. Binary Tree Inorder Traversal
var inorderTraversal = function (root) {
  let stack = [];
  let output = [];

  while (stack.length > 0 || root !== null) {
    if (root !== null) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      output.push(root.val);
      root = root.right;
    }
  }
  return output;
};

//70. Climbing stairs
var climbStairs = function (n) {
  let memo = [1, 1, 2];
  for (let i = 0; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo;
};

//88. Merge Sorted Array
var merge = function (nums1, m, nums2, n) {
  let first = m - 1; //pointers
  let second = n - 1; //pointers
  let i = nums1.length - 1;
  while (second >= 0) {
    let firstval = nums1[first];
    let secondval = nums2[second];
    if (firstval > secondval) {
      nums1[i] = firstval;
      first--;
      i--;
    } else {
      nums1[i] = secondval;
      second--;
      i--;
    }
  }
};

//94. Binary Tree Inorder Traversal
var inorderTraversal = function (root) {
  let stack = [];
  let output = [];

  while (stack.length > 0 || root !== null) {
    if (root !== null) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      output.push(root.val);
      root = root.right;
    }
  }
  return output;
};

//94. Binary Tree Inorder Traversal (Option 2)
var inorderTraversal = function (root) {
  let stack = [];
  hello(root);

  function hello(root) {
    if (!root) return null;
    hello(root.left);
    stack.push(root.val);
    hello(root.right);
  }
  return stack;
};

//101. Symmetric tree [Recusive]
var isSymmetric = function (root) {
  let res = true;

  function hello(root1, root2) {
    if (!root1 && !root2) {
      return;
    }

    if (!root1 || !root2 || root1.val !== root2.val) {
      res = false;
      return;
    }

    hello(root1.left, root2.right);
    hello(root2.left, root1.right);
  }
  hello(root, root);
  return res;
};

//121. Best Time to Buy and Sell Stock
var maxProfit = function (prices) {
  base = prices[0];
  let money = 0;

  for (let j = 0; j < prices.length; j++) {
    if (base > prices[j]) {
      base = prices[j];
    } else {
      money = Math.max(prices[j] - base, money);
    }
  }
  return money;
};

//125. Valid Palindrome
var isPalindrome = function (s) {
  let newstring = s.slice('').toLowerCase(); //lowercase and when to slice
  let storage = [];
  let alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < newstring.length; i++) {
    if (alphabet.includes(newstring[i])) {
      storage.push(newstring[i]);
    }
  }
  return storage.join('') == storage.reverse().join('');
};

//136.Single number
var singleNumber = function (nums) {
  //anytime you want to store use that frequency pattern
  let map = {}; //object

  //for of loop
  for (let val of nums) {
    //val of nums is = map[val] = map[val]||0 +1
    map[val] = (map[val] || 0) + 1; //thats how you incrememnt this
  }

  //for in loop
  for (let yo in map) {
    //for loop
    if (map[yo] === 1) {
      //for in loop =1 return that variable
      return yo;
    }
  }
};

//141. Linked List Cycle
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

//160.Intersection of two linked lists
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    if (pA === null) {
      pA = headB;
    } else {
      pA = pA.next;
    }

    if (pB === null) {
      pB = headA;
    } else {
      pB = pB.next;
    }
  }
  return pA;

  //Questions i have, why is pointA not equal to pointB
  //if pA === null then pA = headB and pA= pA.next
  //if pB=== null pB = headA, pB = pB.next
};

//163. Missing Ranges
function findMissingRanges(nums, lower, upper) {
  let res = [];
  nums = [lower - 1, ...nums, upper + 1];

  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1];

    if (diff === 2) {
      res.push(`${nums[i - 1] + 1}`);
    } else if (diff > 2) {
      res.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
    }
  }
  return res;
}

//169.Majority Element
var majorityElement = function (nums) {
  let result = [];

  for (let val of nums) {
    result[val] = (result[val] || 0) + 1;
  }

  for (let key in result) {
    if (result[key] > nums.length / 2) {
      return key;
    }
  }
};
