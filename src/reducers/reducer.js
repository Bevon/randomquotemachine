const NEW_QUOTE = 'NEW_QUOTE';

//Reducer function
function quotesReducer(state = [], action) {
  switch (action.type) {
    case NEW_QUOTE:
      return [...state, action.quote];
    default:
      return state;
  }
}


//Action Creators
function newQuote(quote) {
  return {
    type: NEW_QUOTE,
    quote
  };
}

export { quotesReducer };   // export the reducer