function quickSort(nums) {
    if (nums.length < 2) {
        return nums;
    }

    const pivot = nums[nums.length - 1];
    const smallerThanPivot = [];
    const largerThanPivot = [];

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) {
            smallerThanPivot.push(nums[i]);
        } else {
            largerThanPivot.push(nums[i]);
        }
    }

    return [
        ...quickSort(smallerThanPivot),
        pivot,
        ...quickSort(largerThanPivot)
    ]
}

console.log(quickSort([10, 8, 2, 1, 6, 3, 9, 4, 7, 5]));

//quickSort([10, 8, 2, 1, 6, 3, 9, 4, 7, 5]);

/**
 * 
 * - time complexity O(n^2)
 * - last number in array (name "pivot") is considered starting point
 * - the rest of the array (besides pivot) is put in 2 arrays:
 *        1) bigger than pivot
 *        2) smaller than pivot
 * - this process is then done recursively
 * - returned arrays are concated (left and right)
 * 
 * 
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.
 * 
 */
