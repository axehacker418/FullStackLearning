import React, {  useState } from 'react'

function App() {
  const [note, setnote] = useState({ title: "", des: "" });
  const [notes, setNotes] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault()
    setNotes([...notes, note])
    setnote({ title: "", des: "" })
  }



  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-amber-200 text-white gap-6">

      {/* FORM SECTION */}
      <form
        onSubmit={submitHandler}
        className="flex flex-col lg:h-screen lg:flex-row w-full lg:w-2/3 gap-6 rounded-2xl p-6"
      >
        {/* IMAGE */}
        <div className="flex w-full lg:w-1/2 items-center justify-center ">
          <img
            className="h-40 lg:h-60"
            src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
            alt="Note"
          />
        </div>

        {/* INPUTS */}
        <div className='flex flex-col lg:w-1/2 '>
          <h1 className='flex text-3xl text-cyan-700 font-bold italic pb-5 '>Add Notes!</h1>
          <div className="flex gap-4 rounded-2xl px-4 max-[80vh] overflow-auto bg-green-50 w-full items-center flex-col">

            <input
              className="px-5 mt-3 w-full py-2 border-2 rounded text-blue-800"
              type="text"
              placeholder="write notes heading.."
              value={note.title}
              onChange={(e) => {
                setnote({ ...note, title: e.target.value })
              }}
            />

            <textarea
              className="px-5 h-24 w-full py-2 text-blue-800 border-2 rounded"
              placeholder="enter details"
              value={note.des}
              onChange={
                (e) => { setnote({ ...note, des: e.target.value }) }
              }
            ></textarea>

            <button className="bg-cyan-700 p-2 mb-5 w-full active:scale-90 text-white rounded-2xl">
              Add Note
            </button>
          </div>
        </div>

      </form>

      {/* NOTES SECTION */}
      <div className="w-full bg-amber-200 lg:w-1/3 p-6 flex flex-col lg:h-screen">
        <h1 className='text-3xl text-pink-300 font-bold italic pb-5'>Keep Notes!</h1>
        <div className="border-t-2 pl-6 border-emerald-600 pt-5 flex flex-wrap gap-5 overflow-y-auto flex-1 custom-scrollbar shadow-[0_4px_6px_-1px_rgba(0,0,0,0.07)]">



          {
            notes.map((note, index)=>(
              <div key={index} className=" border-b-cyan-300 bg-white p-6 rounded-2xl w-40 h-52 bg-cover bg-[url(https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png)]">
              <h2 className='font-bold text-black leading-tight text-xl'>Sno.{index + 1} {note.title}</h2>
              <p className='leading-tight text-gray-700'>{note.des}</p>
            </div>
            )
              
           
          )

          }


{/* 
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div> */}
        </div>
      </div>
    </div>
  )
}

export default App