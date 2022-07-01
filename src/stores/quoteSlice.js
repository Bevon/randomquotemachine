import {createSlice} from '@reduxjs/toolkit';
import {Quotes} from '../data';


export const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: Quotes.quotes[Math.floor(Math.random() * Quotes.quotes.length)],
        color: '#'+Math.floor(Math.random()*16777215).toString(16),
    },
    reducers: {
        newQuote: (state) => {
            state.quote = Quotes.quotes[Math.floor(Math.random() * Quotes.quotes.length)];
            state.color = '#'+Math.floor(Math.random()*16777215).toString(16);
        }
    }

});

export const {newQuote} = quoteSlice.actions;


export default quoteSlice.reducer;