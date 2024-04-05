import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

function App() {
  const [mode ,setMode ] =  useState('light') //it tells whether the dark mode is enabled or not 
  return (
   <>
<Navbar title="TextUtils" mode={mode}/>
<div className="container my-3">
<TextForm heading="Enter the Text to analyze Below" />
{/* <About /> */}
</div>
   </>
  );
}

export default App;
