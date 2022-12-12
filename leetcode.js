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
