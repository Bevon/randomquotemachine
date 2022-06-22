import React, { useEffect, useState } from "react";
import Quotes from "./components/quotes";
import {useSelector, useDispatch} from 'react-redux';
import { newQuote } from "./stores/quoteSlice";
import './index.css'

function App() {
  const quote = useSelector(state => state.quote);
  const dispatch = useDispatch();
  const [styleState, setStyleState] = useState({})

   useEffect(function(){
    setStyleState({...styleState, backgroundColor:quote.color})
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
