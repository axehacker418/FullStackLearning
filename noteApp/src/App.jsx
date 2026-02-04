import React from 'react'

function App() {
  const submitHandler= (e) =>{
    e.preventDefault()
    console.log('form submitted...');

  }
  return (
    <div className='h-screen  bg-amber-100 text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e);

      }} className='flex justify-between items-start  rounded-2xl p-10  bg-amber-100'>
         <div className=' flex pl-3 w-1/2 items-center flex-col'>
        <img className='h-60 ' src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="Note" />
        </div>
        

        <div className='flex gap-4 rounded-2xl px-3 bg-green-100 w-1/2 items-center flex-col'>
        <input className='px-5 mt-3 w-full py-2 border-2 rounded text-blue-800 ' type='text' placeholder='write notes heading..' />
        
        <textarea className='px-5 h-20 w-full py-0 text-blue-800 border-2 rounded' placeholder='enter details' name='' id=''></textarea>
        <button className=' bg-cyan-700 mb-4 w-full py-2 pb-3 text-white rounded-2xl'>Add Note</button>

        </div>
        
      
       
      </form>
      
    
      
    </div>
  )
}

export default App