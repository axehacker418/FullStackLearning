// import React from 'react'

// function App() {
//   const submitHandler = (e) => {
//     e.preventDefault()
//     console.log('form submitted...')
//   }

//   return (
//     <div className="min-h-screen  flex flex-col lg:flex-row bg-amber-100 text-white gap-6  ">

//       {/* FORM SECTION */}
//       <form
//         onSubmit={submitHandler}
//         className="flex flex-col lg:h-screen lg:flex-row w-full lg:w-2/3 gap-6 rounded-2xl p-6"
//       >
//         {/* IMAGE */}
//         <div className="flex w-full lg:w-1/2 items-center justify-center">
//           <img
//             className="h-40 lg:h-60"
//             src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
//             alt="Note"
//           />
//         </div>

//         {/* INPUTS */}
//         <div className="flex gap-4 rounded-2xl px-4 bg-green-100 w-full lg:w-1/2 items-center flex-col">
//           <input
//             className="px-5 mt-3 w-full py-2 border-2 rounded text-blue-800"
//             type="text"
//             placeholder="write notes heading.."
//           />

//           <textarea
//             className="px-5 h-24 w-full py-2 text-blue-800 border-2 rounded"
//             placeholder="enter details"
//           ></textarea>

//           <button className="bg-cyan-700 mb-4 w-full py-2 text-white rounded-2xl">
//             Add Note
//           </button>
//         </div>
//       </form>

//       {/* NOTES SECTION */}
//       <div className="  w-full bg-amber-100 lg:w-1/3 p-6">
//       {/* <div className="w-full h-full bg-white lg:bg-amber-100 lg:w-1/3 p-6 rounded-2xl"> */}
//       <h1 className='text-3xl text-pink-300 font-bold italic pb-5'>Keep Notes!</h1>
//         <div className=" border-t-1 pl-6  border-emerald-600 flex lg:h-screen flex-wrap gap-5 overflow-y-auto">
//           <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
//           <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
//           <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
//           <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
//           <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
//           <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
//           <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
//           <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
//           <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
//         </div>
//       </div>


//       {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4  */}
//     </div>
//   )
// }

// export default App




import React from 'react'

function App() {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('form submitted...')
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-amber-100 text-white gap-6">

      {/* FORM SECTION */}
      <form
        onSubmit={submitHandler}
        className="flex flex-col lg:h-screen lg:flex-row w-full lg:w-2/3 gap-6 rounded-2xl p-6"
      >
        {/* IMAGE */}
        <div className="flex w-full lg:w-1/2 items-center justify-center">
          <img
            className="h-40 lg:h-60"
            src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
            alt="Note"
          />
        </div>

        {/* INPUTS */}
        <div className="flex gap-4 rounded-2xl px-4 bg-green-100 w-full lg:w-1/2 items-center flex-col">
          <input
            className="px-5 mt-3 w-full py-2 border-2 rounded text-blue-800"
            type="text"
            placeholder="write notes heading.."
          />

          <textarea
            className="px-5 h-24 w-full py-2 text-blue-800 border-2 rounded"
            placeholder="enter details"
          ></textarea>

          <button className="bg-cyan-700 mb-4 w-full py-2 text-white rounded-2xl">
            Add Note
          </button>
        </div>
      </form>

      {/* NOTES SECTION */}
      <div className="w-full bg-amber-100 lg:w-1/3 p-6 flex flex-col lg:h-screen">
        <h1 className='text-3xl text-pink-300 font-bold italic pb-5'>Keep Notes!</h1>
        <div className="border-t-2 border-emerald-600 pt-5 flex flex-wrap gap-5 overflow-y-auto flex-1 custom-scrollbar">
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
          <div className="bg-white p-6 rounded-2xl w-40 h-52"></div>
        </div>
      </div>
    </div>
  )
}

export default App