import {createContext, ReactNode, useReducer } from "react";
import { shuffleDeck } from "../utils/deckCards";
import { Card } from "../types/card.types";
import { tower1Reducer } from "./reducers";

export interface State {
    tower1: Card[],
    tower2: Card[],
    tower3: Card[]
}

export const initialState:State = {
    tower1: shuffleDeck,
    tower2: [],
    tower3: []
}

// Context
export const MyContext = createContext({
    state:initialState, 
    addItem: (item:Card) => {},
    removeItem: (item:Card) => {}
})


type ChildrenProp = {
    children: ReactNode
}

export const ContextProvider = ({children}: ChildrenProp) => {
    const [state, dispatch] = useReducer(tower1Reducer, initialState)

    const addItem = (item: Card) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
      };

      const removeItem = (item: Card) => {
        dispatch({ type: 'REMOVE_ITEM', payload: item });
      };
    return (
        <MyContext.Provider value={{state, addItem, removeItem}}>{children}</MyContext.Provider>
    )

}