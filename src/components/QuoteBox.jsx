import React from 'react'
const QuoteBox = ({randomQuote, getRandomAll, randomColors}) => {
  const objectStyle = {
    color: randomColors
  }
  const objectBgStyle = {
    backgroundColor: randomColors
  }
  return (
    <article className='card' style={objectStyle}>
        <div className='card__content'>
          <i class="fa-solid fa-quote-left card__icon"></i>  
          <p className='card__quote'>{`${randomQuote.quote}`}</p>
        </div>
        <div className="card__info">
          <h2 className='card__item'>{`${randomQuote.author}`}</h2>
          <button onClick={getRandomAll} style={objectBgStyle} className='card__btn'>&#62;</button>
        </div>
    </article>
  )
}

export default QuoteBox