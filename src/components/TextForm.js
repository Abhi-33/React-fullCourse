import React , {useState} from 'react'

export default function TextForm(props) {
    //to uppercase
    const convertUP = ()=>{
        // console.log('Uppercase Was Clicked' + " " +  Text);
        let newText = Text.toUpperCase();
        setText(newText)
    }
    //to lowercase
    const convertLO = ()=>{
        // console.log('Uppercase Was Clicked' + " " +  Text);
        let newText = Text.toLowerCase();
        setText(newText)
    }

    const convertonChange =(event)=>{
        setText(event.target.value);
    }
    const [Text, setText] = useState('Enter Text here : ');
    // Text = "New Text"; //Wrong way to Change the Text or state
    // setText("New Text"); //Correct way of changing or updating the state
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={Text} onChange={convertonChange} id="myBox" rows= "10"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={convertUP}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={convertLO}>Convert to lowerrcase</button>
  </div>
  <div className="container my-3">
    <h2>Your Text Summary</h2>
    <p><b>{Text.split(" ").length}words and {Text.length} characters</b></p>
    <p>{0.008 * Text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{Text}</p>
  </div>
  </>
  )
}
