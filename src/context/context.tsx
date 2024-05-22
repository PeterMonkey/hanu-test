import {createContext, ReactNode } from "react";
import { shuffleDeck } from "../utils/deckCards";
import { Card } from "../types/card.types";

interface State {
    tower1: Card[],
    tower2: Card[],
    tower3: Card[]
}

export const state:State = {
    tower1: shuffleDeck,
    tower2: [],
    tower3: []
}

export const MyContext = createContext(state)


type ChildrenProp = {
    children: ReactNode
}

export const ContextProvider = ({children}: ChildrenProp) => {
    return (
        <MyContext.Provider value={state}>{children}</MyContext.Provider>
    )

}