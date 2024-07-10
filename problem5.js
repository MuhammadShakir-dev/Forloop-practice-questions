// Write a program that reverses a given string using a for loop.
// Now there are many ways to reverse a string.

// method -1

function reverseString(str) { 
     return str.split("").reverse().join("")
}

console.log(reverseString("Shakir"))

// method - 2 using for loop

function reverseString(str) { 
    let newStr = "";
    
    for (let i = str.length - 1; i >= 0; i--) { 
        newStr += str[i] 
    }

    return newStr
}

console.log(reverseString("Shakir"));
