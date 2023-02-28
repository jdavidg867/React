import React, { useState } from 'react'
import './UseState.css'
export const UseState = () => {
  const [counter, setCounter] = useState(0)
  
  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }
  
  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1)
  }
  
  return (
    <div className='counter'>
      Counter
      <div>
        {counter}
      </div>
      <div className="buttons">
          <button className='Increment' onClick={handleClick1}>+</button>
        <button onClick={handleClick2}>-</button>
      </div>
    </div>
  )
}