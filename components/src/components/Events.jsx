import React, { useState } from 'react'

const Events = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleBackground = () => {
    setIsDark(!isDark)

    if (!isDark) {
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
    } else {
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }

  return (
    <div>
      <h1>Events</h1>

      <button onClick={() => alert('Button Clicked')}>
        Click
      </button>

      <div>
        <button onClick={toggleBackground}>
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  )
}

export default Events
