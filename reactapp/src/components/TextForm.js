import React from 'react'
// react hook hooks are a new addition in react 16.8  they let you use the sate and other react feture without writing a class 
import { useState } from 'react' // this.state in class while usestate in function 


export default function TextForm(props) {
    const [text, setText]=useState('enter text here2 '); //array distructuring syntax use updation function text is a value and settext is function here can be named anything 
    //setText("jshbhjhbbb"); //correct way 
    //text="abc"; // wrong way to change the state 
    const handleuppercaseClick=()=>{
        alert("upper case hit")
        let newText=text.toUpperCase();

        setText("u have clicked on uppercae");
        setText(newText)
    }
    const onchangeF=(event)=>{
        setText(event.target.value);//event handling or listening 
        console.log("onchangehit hit")
    }

  return (
    <>
    <div>
        
        <div className="mb-3">
            <h2> this is a text area</h2>
        <label htmlFor="mybox" className="form-label">{props.heading}</label>
        <textarea value={text} className="form-control" id="mybox" rows="10" onChange={onchangeF} ></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleuppercaseClick}>convert to uppercase</button>


    </div>

    <div className='container my-3'  >
        <h1>
            Your text summary
        </h1>
        <p>
            {text.split(" ").length}words and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
    </div>
    
    </>
  );
}

