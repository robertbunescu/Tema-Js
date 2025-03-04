
// 1. Tipăriți toate numerele pare de la 0 la 10 //

function evenNumbers(n) {
    let result = []
    for (let i = 0; i <= n; i += 2) { // Incrementam din 2 în 2
        result.push(i); // Adăugăm `i` în array
    }
    return result.join(", "); // Convertim array-ul intr-un string
}

console.log(evenNumbers(10)); 

// 2. Calculați suma numerelor dintr-un șir de numere //

function resultSum(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(resultSum([1, -5, 20, -34, 16, 29, 36, -4]));
console.log(resultSum([3.45, -2.68, 356, -75.96, 64, 19.28]));

// 3. Creați o funcție care inversează un șir de numere //

function reverseArray(numbers) {
    return numbers.reverse();
}
console.log(reverseArray([1, -5, 20, -34, 16, 29, 36, -4]));

// 4. Returnează numărul de vocale dintr-un șir de caractere (string) //

function numVowels(str) {

    let totalVowels = 0;
    const Vowels = "aeiouAEIOU";

    for (let char of str) {
        if (Vowels.includes(char))
            totalVowels++;
        }    
        return totalVowels;
}
console.log(numVowels("string de test"));