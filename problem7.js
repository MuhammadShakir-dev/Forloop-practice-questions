// Write a program that prints the first n terms of the Fibonacci sequence, where n is a user input.

function fabonacciSequence(n) { 
    let a = 0, b = 1, nextTerm;

    for (let i = 1; i <= n; i++) { 
        console.log(a);
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
}

fabonacciSequence(5)
