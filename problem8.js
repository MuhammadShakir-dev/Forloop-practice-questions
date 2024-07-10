// Write a program that finds the largest number in a given array of numbers.

// using Math.min and Math.max

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let minNum = Math.min(... arr1);
// let maxNum = Math.max(... arr1);

// console.log(minNum);
// console.log(maxNum);

// using for loop

function findMaxNum(num) { 
    let largest = num[0];

    for (let i = 1; i < num.length; i++) { 
        if (num[i] > largest) { 
            largest = num[i]
        }
    }

    return largest
} 

console.log(findMaxNum(newArray))
