/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    // return exactly two numbers
    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target) return [i, j];
        }
    }

    return null;
};

const testing = (question, answer) => {

    const output = twoSum(question.nums, question.target);
    const check01 = answer[0] === output[0];
    const check02 = answer[1] === output[1];
    const successMsg = `Input: nums = ${question.nums}, target = ${question.target} , Output: ${answer} `;
    const failedMsg = `Input: nums = ${question.nums}, target = ${question.target} , Output: ${output} `;
    if (check01 && check02) console.log(`${successMsg} , correct 🚀🚀`);
    else console.error(`${failedMsg} , failed ❌❌`);
};

testing(
    {
        nums: [2, 7, 11, 15],
        target: 9
    },
    [0, 1]
)

testing(
    {
        nums: [3, 2, 4],
        target: 6
    },
    [1, 2]
)

testing(
    {
        nums: [3, 3],
        target: 6
    },
    [0, 1]
)

/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]


Input: nums = [3,3], target = 6
Output: [0,1]
 */


var sortedTwoSum = function (numbers, target) {

    // return exactly two numbers
    for (let i = 0; i < numbers.length; i++) {

        const max = target - numbers[i];

        for (let j = i + 1; j < numbers.length; j++) {

            if (max < numbers[j]) break;
            if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
        }
    }

    return null;
};