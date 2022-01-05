import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!","success");
    }
    const handleLoClick = () => {
        //console.log("Lowercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!","success");
    }
    const handleCapClick = () => {
        let newText = ( text.replace(/(^\w|\s\w)/g, m => m.toUpperCase()));
        setText(newText);
        props.showAlert("Converted First Letter to Upper Case!","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!","success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!","success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared all Text!","success");
    }
    const handleOnChange = (event) => {
        //console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');
    return (
        <>

        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#3d3bbf' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lower Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCapClick}>Convert First Letter to Upper Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>It will take {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read.</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter Something in the Above Text Area to Preview"}</p>
        </div>
        </>
    )
}

