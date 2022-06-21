import {configureStore} from '@reduxjs/toolkit';
import quotesReducer from './quoteSlice';


export default configureStore({
    reducer: {
        quote : quotesReducer
    }
});




















































// const NEW_QUOTE = 'NEW_QUOTE';

// const initialState = {
//   quote: Quotes.quotes[Math.floor(Math.random() * Quotes.length)],
//   color:'#'+Math.floor(Math.random()*16777215).toString(16)

// }

// //Reducer function
// function quotesReducer(state = initialState, action) {
//   switch (action.type) {
//     case NEW_QUOTE:
//       return {
//         ...state,
//         quote: Quotes.quotes[Math.floor(Math.random() * Quotes.length)],
//         color:'#'+Math.floor(Math.random()*16777215).toString(16)
//       };
//     default:
//       return state;
//     }
// }

// //Action Creators
// function newQuote() {
//   return {
//     type: NEW_QUOTE,
//   };
// }

// export { quotesReducer };   // export the reducer

