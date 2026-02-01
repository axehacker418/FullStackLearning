import React from 'react'

function App() {
  function btnclick(){
    console.log('button clicked')
  }
  function mouseEnter(){
    console.log('mouseenter')
  }

  function inputChanging(u){
    console.log(u)
  }
  return (
    <>
    <div className='bg-red-400'>
      <button onMouseEnter={mouseEnter} onClick={btnclick}>click here</button>
      <button onMouseEnter={mouseEnter} onClick={()=>{
        console.log("button2")
      }}>click here2</button>

      <input className='form-control' type='text' placeholder='write here ' onChange={(elem)=>{
        inputChanging(elem.target.value)
      }} />
    </div>

    <div onWheel={()=>{
      console.log('scrolling')
    }} onMouseMove={(elem)=>{
        // console.log(elem.clientX, elem.clientY)
      }} className='box bg-amber-500 h-96 w-screen' >
      
ok

    </div>
    
    </>
  )
}

export default App