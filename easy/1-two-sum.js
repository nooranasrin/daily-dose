const twoSum = (nums, target) => {
  const map = new Map();

  for (let index = 0; index < nums.length; index++) {
    if (map.has(nums[index])) {
      return [map.get(nums[index]), index];
    }
    map.set(target - nums[index], index);
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
