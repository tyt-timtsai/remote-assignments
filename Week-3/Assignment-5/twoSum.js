//想法一 ： 兩個index去相加 for loop in for loop
function twoSum(nums, target) {
  let sums = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length - i; j++) {
      if (nums[i] + nums[j] === target) {
        sums.push([i, j]);
      }
    }
  }
  console.log(sums);
}
twoSum([1, 2, 7, 8, 11, 15], 9); // [[0,3], [1,2]]

//想法二 ：先用target減去一個數，然後用餘數去檢查有沒有一樣的
function twoSum2(nums, target) {
  let sums = [];
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; nums[j] < target; j++) {
      if (nums[j] === target - nums[i]) {
        sums.push([i, j]);
      }
    }
  }
  console.log(sums);
}
twoSum2([1, 2, 7, 8, 11, 15], 9);

/*
    For example:
    twoSum([2, 7, 11, 15], 9);
    Should returns:
    [0, 1]
    Because:
    nums[0]+nums[1] is 9
   */
