import React from "react";
import {Twitter, Twitch} from 'react-feather'
import 'animate.css';
import { newQuote } from "../stores/quoteSlice";


function Quotes({quote, dispatch}) {

   const stateColor = quote.color;

   const quoteStyle = {
    fontFamily: '"Tangerine", serif',
    fontSize: '2.5rem',
    color: stateColor,
    
    }
    const authorStyle = {
    fontFamily: '"Kdam Thmor Pro", sans-serif',
    fontSize: '1.5rem',
    fontWeight: 100,
    color: stateColor,
    
    }
    const newQuoteStyle = {
    fontFamily: '"Kdam Thmor Pro", serif',
    fontSize: '1.5rem',
    fontWeight: '300',
    color: stateColor,

    }
   
    
       
    function handleClick(){
        dispatch(newQuote());
    }
    

    return (
        
        <div className='card mb-10 mx-auto shadow p-3 mb-5 bg-body rounded position-absolute top-50 start-50 translate-middle' id='quote-box'>
            <div className='card-body'>
                <div className='text-center animate__fadeInDown animate__delay-2s' style={quoteStyle}>
                    <p id='text' className="">"{quote.quote.quote}</p>
                </div>
                <div className="d-flex flex-row-reverse" style={authorStyle}>
                    <p id='author'> - {quote.quote.author}</p>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-start">
                        <button style={{backgroundColor:stateColor}}  className="btn  rounded-circle p-2 text-white"><a className="text-white" id='tweet-quote' href='https://twitter.com/intent/tweet'><Twitter/></a></button>
                        <button style={{backgroundColor:stateColor}}  className="btn  rounded-circle p-2 text-white"><a className="text-white" id='tweet-quote' href='https://twitter.com/intent/tweet'><Twitch /></a></button>
                    </div>
                    
                    <div className="col-md-6 d-flex justify-content-end" style={newQuoteStyle}>
                        <button className="btn rounded-pill text-white" style={{backgroundColor:stateColor}} id='new-quote' onClick={handleClick}>New Quote</button>
                    </div>
                </div> 
            </div>
        </div>
    )
}


export default Quotes;