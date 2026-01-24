import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'

export default function App() {
  const [mode,setmode]=useState('dark');
  return (
    <div>
    <Navbar title="TextUtils" mode={mode}/>
    {/* <Navbar title={123}/>
    <Navbar />
    <Navbar title={true}/> */}
    <div className='container my-3'>
      <TextForm heading="enter text here"/>
      <About mode={mode} />
    </div>
    </div>
  )
}
