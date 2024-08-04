import { useState } from 'react'
import './App.css'

function App() {
  
  const [color, setColor] = useState("#673AB7")

  return (
    <div className="container" style={{backgroundColor : color}}>
      <div className="colorPanal">
        <div className="buttons">
          <button onClick = {() => setColor("red") } >Red</button>
          <button onClick = {() => setColor("green") } >Green</button>
          <button onClick = {() => setColor("blue") } >Blue</button>
          <button onClick = {() => setColor("orange") } >Orange</button>
          <button onClick = {() => setColor("pink") } >Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
