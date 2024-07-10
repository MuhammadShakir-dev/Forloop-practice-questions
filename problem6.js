// Write a program that counts the number of vowels in a given string.

// variant - 1  : show all vowels in string in an array  
function countVowels(str) { 
    let vowelsCount = [];
    str.toLowerCase();

    for (let i = 1; i <= str.length; i++) { 
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') { 
            vowelsCount.push(str[i])
        }
    }

    return vowelsCount;
}

console.log(countVowels("Hello my name is Shakir"))

//variant - 2 : number of vowels.


function countVowels(str) { 
        let vowelsCount = 0;
        str.toLowerCase();
    
        for (let i = 1; i <= str.length; i++) { 
            if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') { 
                vowelsCount += 1; 
            }
        }
    
        return vowelsCount;
    }
    
console.log(countVowels("Hello my name is Shakir"))
    
