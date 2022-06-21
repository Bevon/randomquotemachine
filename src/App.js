import React, { useEffect } from "react";
import Quotes from "./components/quotes";
import {useSelector, useDispatch} from 'react-redux';
import { newQuote } from "./stores/quoteSlice";



function App() {
  const quote = useSelector(state => state.quote);
  const dispatch = useDispatch();

   useEffect(function(){
        dispatch(newQuote());
   },[dispatch]);

  return (
    <div className="container-fluid vh-100" style={{backgroundColor : quote.color}} >
      <h1 className="text-white text-center">Random Quote Machine</h1>
        <div className="">
          <Quotes quote={quote} dispatch={dispatch}/>
        </div>
    </div>  
    
  );
}

export default App;
