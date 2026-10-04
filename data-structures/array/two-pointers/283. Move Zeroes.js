var moveZeroes = function(nums) {
    let writer = 0;

    for (let reader = 0; reader < nums.length; reader++) {
        if (nums[reader] !== 0) {
            // swap reader and writer
            let temp = nums[writer];
            nums[writer] = nums[reader];
            nums[reader] = temp;

            writer++;
        }
    }
};