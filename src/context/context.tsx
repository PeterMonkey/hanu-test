import {createContext, ReactNode } from "react";
import { shuffleDeck } from "../utils/deckCards";

const State = {
    tower1: shuffleDeck,
    tohwer2: [],
    tower3: []
}

export const MyContext = createContext({})


type ChildrenProp = {
    children: ReactNode
}

export const ContextProvider = ({children}: ChildrenProp) => {
    return (
        <MyContext.Provider value={{}}>{children}</MyContext.Provider>
    )

}