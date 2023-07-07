import { getRandomQuoteAPI, QuoteType } from "../api/api";
import {  BaseThunkType, InferActionsTypes } from "./store";
import { InitialStateType } from './types';


let initialState:InitialStateType = {
  quote: {
    author: "",
    quote: ""
   },
  color: "",
};

const quotesReducer = (state =  initialState, action:ActionsTypes):InitialStateType => {
  console.log(' action-reducer: ',  action);
  switch (action.type) {
    case "SET_QUOTES": {
      return {
        ...state,
        quote: {
          author: action.randomQuote.author,
          quote: action.randomQuote.quote
        }
     };
    }
    case "SET_COLOR": {
      return {
        ...state,
        color: action.color
     };
    }
    default:
    return state
  }
}

export type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  setQuotesAC: (randomQuote: QuoteType) => ({ type: "SET_QUOTES", randomQuote } as const),
  setColorAC: (color: string) => ({ type: "SET_COLOR", color } as const),
}

type ThunkType = BaseThunkType<ActionsTypes>

export const getRandomQuoteThunkCreator = ():ThunkType => (dispatch) => {
  getRandomQuoteAPI().then((randomQuote) => {
    dispatch(actions.setQuotesAC(randomQuote));
   // dispatch(actions.setColorAC(color))
  });
};

export default quotesReducer;
