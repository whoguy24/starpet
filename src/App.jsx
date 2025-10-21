import { useState } from 'react'
import dumbDog from './assets/golden-retriever-tongue-out.jpg'
import './App.css'

function App() {

  var [broke, setBroke] = useState(0)

  return (
    <>

      <div>
        <h2>Welcome to PetStar!</h2>
      </div>

      <div>
        <img src={dumbDog} className="logo" alt="Vite logo" />
      </div>

      <div>
        <button onClick={ () => setBroke(1) }>Make the Silly Dog Jump!</button>
      </div>

      { broke == 1 && 
        <div>
          <p>You broke it.</p>
          <p>Good going, Stupid.</p>
        </div>
      }

    </>
  )
}

export default App
