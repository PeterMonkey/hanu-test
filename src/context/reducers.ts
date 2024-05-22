import { Card } from "../types/card.types";
import { State } from "./context";

export const tower1Reducer = (state, action:{type: string, payload:Card}) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return { 
            tower1: [...state.tower1, action.payload]
        };
      case 'REMOVE_ITEM':
        return { tower1: state.tower1.slice(1) };
      default:
        return state;
    }
  };