// Print Even Numbers in an Array

let arr = [10, 20, 67, 78, 90, 45, 22, 44];

function printEvenNums(arr) { 

    let evenNums = [];
    for (let i = 0; i <= arr.length; i++) { 
        if (arr[i] % 2 === 0) { 
            evenNums.push(arr[i])
        }
    }

    return evenNums;
}

console.log(printEvenNums(arr))
