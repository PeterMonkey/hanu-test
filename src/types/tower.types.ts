import { Suit } from "../enums/suit.enum";
import { Card } from "./card.types";


export type PropsTower= {
    id: number
    numb: number;
    suit: Suit;
    isEmpty: boolean;
    fn: (item:Card) => void
}