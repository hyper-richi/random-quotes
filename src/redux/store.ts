import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, Action } from 'redux';
import ThunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import quotesReducer, { ActionsTypes } from './reducer';

import { ThunkAction } from 'redux-thunk';//для типизации


const rootReducer = quotesReducer;

type RootReducerType = typeof quotesReducer;

export type AppStateType = ReturnType<RootReducerType>;

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action, R=void> = ThunkAction <R, AppStateType, unknown, A>

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ThunkMiddleware)));

export type DispatchType = ThunkDispatch<AppStateType, any, ActionsTypes>

export default store;