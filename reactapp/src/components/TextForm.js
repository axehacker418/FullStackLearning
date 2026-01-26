import React from "react";
// react hook hooks are a new addition in react 16.8  they let you use the sate and other react feture without writing a class
import { useState } from "react"; // this.state in class while usestate in function

export default function TextForm(props) {
  const [text, setText] = useState("enter text here.... "); //array distructuring syntax use updation function text is a value and settext is function here can be named anything

  const handleuppercaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const onchangeF = (event) => {
    setText(event.target.value); //event handling or listening
    console.log("onchangehit hit");
  };

  const [copy, setcopy] = useState("copy");
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      // alert("Copied to clipboard!");
      setcopy("copied");
      setTimeout(() => {
        setcopy("copy");
      }, 1000);
    } catch (err) {
      alert("Failed to copy");
    }
  };

  return (
    <div
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#4b7265",
        color: props.mode === "dark" ? "white" : "Black",
      }}
    >
      <div>
        <div className="mb-3 ">
          <h2> this is a text area</h2>
          <label htmlFor="mybox" className="form-label">
            {props.heading}
          </label>

          <textarea
            value={text}
            className="form-control"
            id="mybox"
            rows="10"
            onChange={onchangeF}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#4b7265",
              color: props.mode === "dark" ? "white" : "Black",
            }}
          >
            {""}
          </textarea>

          <div className="d-flex justify-content-end my-3 ">
            <button
              type="button"
              className="btn btn-light"
              onClick={handleCopy}
            >
              {copy}
              <i className="bi bi-clipboard mx-1"></i>
            </button>
          </div>
        </div>

        <button className="btn btn-primary" onClick={handleuppercaseClick}>
          convert to uppercase
        </button>
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and{" "}
          {text.length} characters words and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
      </div>
    </div>
  );
}
