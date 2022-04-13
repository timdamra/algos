const merge = (left, right) => {
    const results = [];
  
    // only first numbers of left and right arrays need to be compared
    while (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]) {
        // shift removes the first element in an array and returns it
        results.push(left.shift());
      } else {
        results.push(right.shift());
      }
    }
  
    // either left or right will be empty so you can safely concat both
    return results.concat(left, right);
};

function mergeSort(nums) {
    if (nums.length === 1) {
        return nums;
    }

    let halfLength = Math.floor(nums.length / 2);
    let firstHalf = nums.slice(0, halfLength);
    let secondHalf = nums.slice(halfLength);

    // console.log("first", firstHalf)
    // console.log("second", secondHalf)

    return merge(
        mergeSort(firstHalf),
        mergeSort(secondHalf)
    )
}

console.log(mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));

// O(n log n)
