import React, { useEffect, useState } from 'react';
import Quote from './Quote';
import { useDispatch, useSelector } from 'react-redux';
import { actions, ActionsTypes, getRandomQuoteThunkCreator } from '../redux/reducer';
import { ThunkDispatch } from 'redux-thunk';
import { AppStateType, DispatchType } from '../redux/store';

const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];

const QuotesContainer: React.FC = () => {
    const dispatch: DispatchType = useDispatch();

    useEffect(() => {
        dispatch(getRandomQuoteThunkCreator());
    }, [dispatch]);

    const randomQuote = useSelector((state: AppStateType) => {
        return state.quote;
    });

    function first() {
        let today = new Date();
        let milliseconds = today.getMilliseconds();
        console.log('first: ', milliseconds);
    }
    function second() {
        let today = new Date();
        let milliseconds = today.getMilliseconds();
        console.log('second: ', milliseconds);
        first();
    }
    function third() {
        let today = new Date();
        let milliseconds = today.getMilliseconds();
        console.log('third: ', milliseconds);
        second();
    }
    third();

    const colorState = useSelector((state: AppStateType) => {
        return state.color;
    });

    useEffect(() => {
        const color = Math.floor(Math.random() * colors.length);
        // без проверки цвет меняется два раза
        if (Boolean(randomQuote.quote)) {
            dispatch(actions.setColorAC(colors[color]));
            document.body.style.color = `${colors[color]}`;
            document.body.style.backgroundColor = `${colors[color]}`;
        }
    }, [randomQuote]);

    function onClickNextQuote() {
        dispatch(getRandomQuoteThunkCreator());
    }

    return <Quote bgColor={{ backgroundColor: colorState }} quote={randomQuote} onClickNextQuote={onClickNextQuote} />;
};

export default QuotesContainer;
