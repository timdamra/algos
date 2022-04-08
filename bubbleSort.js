function bubbleSort(nums) {
    // flag to track if any numbers were swapped during last iteration
    // if no swaps in last iteration, no more sorting is required
    let swapped;
    
    do {
        swapped = false;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i + 1]) {
                let temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
  
    return nums;
}

console.log(bubbleSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]))

//bubbleSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1])

