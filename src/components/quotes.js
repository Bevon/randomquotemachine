import React from "react"

function Quotes() {
  return (
   
        <div className='card mb-10' id='quote-box' style={{width:'32em'}}>
            <div className='card-body'>
                <div className='text-center'>
                    <p id='text'>Quote</p>
                </div>
                <div>
                    <p id='author'>Author</p>
                </div>
                <div>
                    <button id='new-quote'>New Quote</button>
                </div>
                <div>
                <a id='tweet-quote' href='twitter.com/intent/tweet'><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </div>
  )
}

export default Quotes