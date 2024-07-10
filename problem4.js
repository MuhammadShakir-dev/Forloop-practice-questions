// Write a program that prints the multiplication table of a given number n.

function printTable(n) { 
    for (let i = 1; i <= 10; i++) { 
        console.log(`${n} * ${i} = ${n*i}`)
    }
} 

printTable(2)
