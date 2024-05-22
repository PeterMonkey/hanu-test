import {createContext, ReactNode, useState } from "react";
import { shuffleDeck } from "../utils/deckCards";
import { Card } from "../types/card.types";
import { tower1Reducer } from "./reducers";

export interface State {
    tower1State: Card[],
    tower2State: Card[],
    tower3State: Card[],
    removeFirstDeck: (item: Card) => void
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
    removeFirstDeck: (item: Card) => {}
})


type ChildrenProp = {
    children: ReactNode
}

export const ContextProvider = ({children}: ChildrenProp) => {
    const [tower1State, setTower1State] = useState<Card[]>(shuffleDeck)
    const [tower2State, setTower2State] = useState<Card[]>([])
    const [tower3State, setTower3State] = useState<Card[]>([])

    const removeFirstDeck = (item: Card) => {
        setTower1State((prev) => prev.slice(1))
        setTower2State((prev) => [item, ...prev])
    }

    

    return (
        <MyContext.Provider value={{
            tower1State, 
            tower2State, 
            tower3State,
            removeFirstDeck
        }}>
            {children}
        </MyContext.Provider>
    )

}