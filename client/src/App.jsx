import React from 'react'

function App() {
  function btnclick(){
    console.log('button clicked')
  }
  return (
    <div className='bg-red-400'>
      <button onClick={btnclick}>click here</button>
    </div>
  )
}

export default App