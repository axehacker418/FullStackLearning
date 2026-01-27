import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import {HashRouter,Routes,Route} from 'react-router-dom'

export default function App() {
  const [mode,setmode]=useState('light');
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#4b7265';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';

    }
  }
  return (
    <div>   
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
      
    
   
    <div className='container my-3'>
      <HashRouter>
        <Routes>
          <Route path='/' element= {<TextForm heading="enter text here" mode={mode}/>
} />
        </Routes>
        
      </HashRouter>
      <About mode={mode} />
    </div>

    </div>
  )
}
