import React , {useState} from 'react';

export default function TextForm(props) {
    //to uppercase
    const convertUP = ()=>{
        // console.log('Uppercase Was Clicked' + " " +  Text);
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase" , "success");
    }
    //to lowercase
    const convertLO = ()=>{
        // console.log('Uppercase Was Clicked' + " " +  Text);
        let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase" , "success");
    }

    const convertonChange =(event)=>{
        setText(event.target.value);
    }

    const clearText = ()=>{
      setText('');
      props.showAlert("Text Cleared" , "success");
    }
    const [Text, setText] = useState('Enter Text here : ');
    // Text = "New Text"; //Wrong way to Change the Text or state
    // setText("New Text"); //Correct way of changing or updating the state
  return (
    <>
    <div className='container' style={{color :props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={Text} style={{backgroundColor :props.mode === 'dark' ? '#212529' : 'white' ,color :props.mode === 'dark' ? 'white' : 'black'}} onChange={convertonChange} id="myBox" rows= "10"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={convertUP}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={convertLO}>Convert to lowerrcase</button>
    <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
  </div>
  <div className="container my-3" style={{color :props.mode === 'dark' ? 'white' : 'black'}}>
    <h2>Your Text Summary</h2>
    <p><b>{Text.split(" ").length}words and {Text.length} characters</b></p>
    <p>{0.008 * Text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{Text.length>0?Text : 'Enter something above to preview it here'}</p>
  </div>
  </>
  )
}
