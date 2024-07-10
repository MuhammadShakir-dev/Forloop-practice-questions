// Write a program that calculates the sum of the first n natural numbers, where n is a user input. 

function sumOfNaturalNums(n) { 
    let sum = 0;
    for (let i = 1; i <= n; i++) { 
        sum += i
    }

    return sum;
}

console.log(sumOfNaturalNums(5))
