function twoSum(nums: number[], target: number): number[] {
    const currentNum = new Map<number, number>();
    let goal:number = 0;

    for(let i = 0; i<=nums.length; i++){
        currentNum.set(nums[i], i);
        goal = target - nums[i];

        if (nums.includes(goal) && currentNum.get(nums[i]) !== nums.indexOf(goal)){
            return [currentNum.get(nums[i])!,nums.indexOf(goal)]
        }

    }
};

console.log(twoSum([2,7,11,15],9))