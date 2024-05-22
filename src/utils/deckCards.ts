import { Suit } from "../enums/suit.enum";
import { Card } from "../types/card.types";

const club = Suit.club;
const heart = Suit.heart;
const spade = Suit.spade;
const diamond = Suit.diamond;


//array con los valores y palos 
const arraySuits = [club, heart, spade, diamond];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const deckCards: Card[] = []

//cargando el array
let id = 0
for(let i = 0; i < arraySuits.length; i++) {
    id++
    for(let j = 0; j < values.length; j++) {
        id++
        deckCards.push({
            id: id-1,
            numb: values[j],
            suit: arraySuits[i]
        })
    }
}

// funcion para barajear las cartas
function shuffleArray<T>(array: Array<T>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffleDeck = shuffleArray(deckCards)

export {shuffleDeck}