// Write a program that calculates the factorial of a given number n.

let num = 5;
function findFactoiral(num) { 
    let factorial = 1;

    for (let i = 1; i <= num; i++) { 
        factorial *= i
    }

    return factorial
}
