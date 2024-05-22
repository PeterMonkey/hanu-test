import { Suit } from "../enums/suit.enum";

export type PropsCard = {
    numb: number;
    suit: Suit;
}

export type Card = {
    id: number;
    numb: number;
    suit: Suit
}