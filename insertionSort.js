/**
 * 
 * @param {array} nums 
 * @returns {array}
 */

function insertionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]; // the number to insert
    let j;

    // loop backwards until we find where to insert number
    for (
        j = i - 1; 
        j > -1 && nums[j] > current; 
        j--
    ) {
        // this shifts numbers to the right
        nums[j + 1] = nums[j];
    }

    // insertion is here
    nums[j + 1] = current;
  }

  return nums;
}

//insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]);

console.log(insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));

/**
 * 
 * - best for mostly sorted lists (with few unsorted items)
 * - destructive sort
 * - stable sort
 * - The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is
 * - The inner loop:
 *          -goes over the sorted part of the list backwards
 *          -until reaching number smaller than the "current" in the sorted part of the array (at beginning if sort is ascending)
 *          -inserts number into the correct position in the array
 * 
 */