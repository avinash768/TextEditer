import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("upper" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text convert to uppercase","success");
    }

    const handleLoClick = () =>{
        console.log("upper" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text convert to Lowercase","success");
    }

    const handleCopyClick =()=>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copy","success");
    }
    const handleRemoveSpacesClick =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("remove extra space","success");
    }
    const handleClClick = () =>{
        console.log("upper" + text);
        let newText = "";
        setText(newText);
        props.showAlert("clare text","success")
    }
    const handleOnChange =(event)=>{
        console.log('on cheng');
        setText(event.target.value);
    }
    const [text, setText] = useState('enter text here');


  return (
        <div className='container' > 
                <h1>{props.titles}</h1>
                <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1"  value={text} onChange={handleOnChange} rows="9">Enter text hear</textarea>
               
                </div>
                <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClClick}>clare</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleRemoveSpacesClick}>remove extra spaces</button>
               
                <div className="container">
                    <h1>your text summary</h1>
                    <p>{text.split(" ").length} World and {text.length} chearecters</p>
                    <p>{0.008 * text.split(" ").length} minutes read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Enter text for preview "}</p>
                </div>
                {/* <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="9">Previw</textarea>
               
                </div> */}
                
    </div>
  )
}
