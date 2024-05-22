import {createContext, ReactNode, useState } from "react";
import { shuffleDeck, shuffleArray } from "../utils/deckCards";
import { Card } from "../types/card.types";

export interface State {
    tower1State: Card[],
    tower2State: Card[],
    tower3State: Card[],
    target: number,
    win: boolean,
    removeFirstDeck: (item: Card) => void,
    removeSecondDeck: (item: Card) => void,
    removeThirdDeck: (item: Card) => void,
    resetDeck: () => void
    isEqual: (tower1:number, tower2:number, tower3:number) => void
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
    win: false,
    target: randomValue(),
    removeFirstDeck: (item: Card) => {},
    removeSecondDeck: (item: Card) => {},
    removeThirdDeck: (item: Card) => {},
    resetDeck: () => {},
    isEqual: (tower1:number, tower2:number, tower3:number) => {}
})


type ChildrenProp = {
    children: ReactNode
}

function randomValue() {
    const arrayValues = [1, 2, 3, 4]
    const indice = Math.floor(Math.random() * arrayValues.length)
    return arrayValues[indice]
}

export const ContextProvider = ({children}: ChildrenProp) => {
    

    const [tower1State, setTower1State] = useState<Card[]>(shuffleDeck)
    const [tower2State, setTower2State] = useState<Card[]>([])
    const [tower3State, setTower3State] = useState<Card[]>([])
    const [target, setTarget] = useState(randomValue())
    const [win, setWin] = useState(false)

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

    //reiniciar baraja
    const resetDeck = () => {
        setTower1State(shuffleArray(shuffleDeck))
        setTower2State([])
        setTower3State([])
        setTarget(randomValue())
        setWin(false)
    }

    const isEqual = (tower1:number, tower2:number, tower3:number) => {
        if(tower1 === tower2 && tower2 === tower3 && tower1 === target ) {
            setWin(true)
        }
    }

    return (
        <MyContext.Provider value={{
            tower1State, 
            tower2State, 
            tower3State,
            removeFirstDeck,
            removeSecondDeck,
            removeThirdDeck,
            resetDeck,
            isEqual,
            target,
            win
        }}>
            {children}
        </MyContext.Provider>
    )

}