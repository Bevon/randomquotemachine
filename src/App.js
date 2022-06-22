import React, { useEffect, useState } from "react";
import Quotes from "./components/quotes";
import {useSelector, useDispatch} from 'react-redux';
import { newQuote } from "./stores/quoteSlice";
import './index.css';
import { authorStyle, headerStyle } from "./styles";

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
        <div className="pt-4">
        <h1 className="text-white text-center" style={headerStyle}>Random Quote Machine</h1>
          <Quotes quote={quote} dispatch={dispatch}/>
          <div className="text-center">
                <p className="text-white" style={authorStyle}>- By Bevon -</p>
            </div>
        </div>
    </div>  
    
  );
}

export default App;
