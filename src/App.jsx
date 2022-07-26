
import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quote from './json/quotes.json'
import colors from './utils/colors'
function App() {

  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  let quoteRandom = getRandomElement(quote)
  let colorRandom = getRandomElement(colors)
  const [randomQuote, setRandomQuote] = useState(quoteRandom)
  const [randomColors, setRandomColor] = useState(colorRandom)
 
  const getRandomAll = () => {
    quoteRandom = getRandomElement(quote)
    colorRandom = getRandomElement(colors)

    setRandomQuote(quoteRandom)
    setRandomColor(colorRandom)
  }
  const objectBgStyle = {
    backgroundColor: randomColors
  }

  return (
    <div className="App" style={objectBgStyle}>
      <QuoteBox 
      randomQuote={randomQuote}
      randomColors={randomColors}
      getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
