import {createContext, ReactNode, useState } from "react";
import { shuffleDeck } from "../utils/deckCards";
import { Card } from "../types/card.types";

export interface State {
    tower1State: Card[],
    tower2State: Card[],
    tower3State: Card[],
    removeFirstDeck: (item: Card) => void,
    removeSecondDeck: (item: Card) => void,
    removeThirdDeck: (item: Card) => void
}

// export const initialState:State = {
//     tower1: shuffleDeck,
//     tower2: [],
//     tower3: []
// }

// Context
export const MyContext = createContext<State>({
    tower1State: shuffleDeck, 
    tower2State: [], 
    tower3State: [],
    removeFirstDeck: (item: Card) => {},
    removeSecondDeck: (item: Card) => {},
    removeThirdDeck: (item: Card) => {}
})


type ChildrenProp = {
    children: ReactNode
}

export const ContextProvider = ({children}: ChildrenProp) => {
    const [tower1State, setTower1State] = useState<Card[]>(shuffleDeck)
    const [tower2State, setTower2State] = useState<Card[]>([])
    const [tower3State, setTower3State] = useState<Card[]>([])

    // estructura de stack and queue
    const removeFirstDeck = (item: Card) => {
        setTower1State((prev) => prev.slice(1))
        setTower2State((prev) => [item, ...prev])
    }

    const removeSecondDeck = (item: Card) => {
        setTower2State((prev) => prev.slice(1))
        setTower3State((prev) => [item, ...prev])
    }

    const removeThirdDeck = (item: Card) => {
        setTower3State((prev) => prev.slice(1))
        setTower1State((prev) => [...prev, item])
    }

    return (
        <MyContext.Provider value={{
            tower1State, 
            tower2State, 
            tower3State,
            removeFirstDeck,
            removeSecondDeck,
            removeThirdDeck
        }}>
            {children}
        </MyContext.Provider>
    )

}