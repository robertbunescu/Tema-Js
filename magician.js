
//=== Array Analysis - Elyses Analytic Enchantments [Bonus] ===//

//1. Find the position of a card

function getCardPosition(stack, card){
    return stack.indexOf(card);
}
const card = 2;

console.log(getCardPosition([9, 7, 3, 2],card))  // 3 , pozitia lui 2 

//2. Determine if a card is present

function doesStackIncludeCard(stack, card){
    return stack.includes(card);
}
const card = 3;

console.log(doesStackIncludeCard([9, 7, 3, 2], card));


//3. Determine if each card is even

function isEachCardEven(stack){
    return stack.every((card) => card % 2 === 0);
}
console.log(isEachCardEven([2, 3, 4, 5], card));

console.log(isEachCardEven([2, 4, 6, 7]));   // false (pentru ca 7 este impar)
console.log(isEachCardEven([2, 4, 6, 8]));   // true (pentru ca toate sunt pare)
console.log(isEachCardEven([1, 3, 5, 7]));   // false (pentru ca toate sunt impare)

//4. Check if the stack contains an odd-value card

function doesStackIncludeOddCard(stack){
    return stack.some(card => card % 2 !== 0);
}
console.log(doesStackIncludeOddCard([3, 2, 6, 4, 8])); // true (3 este impar)

//5. Get the first odd card from the stack

function getFirstOddCard(stack){
    return stack.find(card => card % 2 !== 0);
}
console.log(getFirstOddCard([4, 2, 8, 7, 9]));  //True ,7 este primul numar impar 

//6. Determine the position of the first card that is even
function getFirstEvenCardPosition(stack){
    return stack.findIndex(card => card % 2 === 0);
}
console.log(getFirstEvenCardPosition([5, 2, 3, 1])); //pozitia 1 // 2 este primul numar par 