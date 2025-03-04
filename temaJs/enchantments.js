
//=== Elyses Looping Enchantments ===//


// 1. Determine how many cards of a certain type are in the deck

function cardTypeCheck(deck, cardType) {
    let count = 0;
    deck.forEach(card => {
        if (card === cardType) {
            count++;
        }
    });
    return count;
}
const cardType = 3;
console.log(cardTypeCheck([1, 2, 3, 4], cardType)); // => 1

// 2. Determine how many odd or even cards there are

function determineOddEvenCards(deck, isEven) {
    let count = 0;
    for (const card of deck) {
        if ((isEven && card % 2 === 0) || (!isEven && card % 2 !== 0)) {
            count++;
        }
    }
    return count;
}

console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], true));  // => 2 (sunt cărți pare: 2, 6)
console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], false)); // => 4 (sunt cărți impare: 1, 3, 1, 5)