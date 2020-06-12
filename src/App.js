import React, {useState} from 'react'
import QuoteBox from './components/QuoteBox'

const App = () => {

   const [color, setColor] = useState('')

   const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`

   const style = {
      background: randomColor
   }

   return (
      <div className="content" style={style}>
         <QuoteBox />
      </div>
   )
}

export default App
