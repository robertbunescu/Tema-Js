//===Array Destructuring, Rest and Spread - Elyses Destruct Enchantments [Bonus] ===//



// 1. Get First Card  //

function getFirstCard(deck){
    return deck.at(0); // at(0) returneaza pentru primul element
}

console.log(getFirstCard([3, 2, 10, 6, 7]));

// 2. Get Second Card //
function secondCard(deck) {
    return deck.at(1); // at(1) returneaza pentru al doilea element

}
console.log(secondCard([5, 9, 7, 1, 8]));

// 3. Swap Top Two Cards //

function swapTopTwoCards(deck) {
    [deck[0], deck[1]] = [deck[1], deck[0]]; // schimbam primele doua elemente 
    return deck;
}
console.log(secondCard([7, 10, 3, 8, 5]));

// 4. Discard Top Card(deck) // 


function discardTopCard(deck) {
    const [topCard, ...restOfDeck] = deck; // TopCard = prima carte // restOfDeck = restul cartilor //
    return [topCard , restOfDeck];
}
console.log(discardTopCard([2, 5, 4, 9, 3])); 

function insertFaceCards(deck) {
    const faceCards = ['jack', 'queen', 'king'];
    deck.splice(1, 0, ...faceCards); // pune faceCards la pozitia cu indexul 1 
return deck;
}
console.log(insertFaceCards([5, 4, 7, 10]));