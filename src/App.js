import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert';

function App() {
  const [mode ,setMode ] =  useState('light'); //it tells whether the dark mode is enabled or not 
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark Mode Has Been Enabled" , "success");
    }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode Has Been Enabled" , "success");
  }
  }
  return (
   <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert = {alert}/>
<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the Text to analyze Below"   mode={mode} />
{/* <About /> */}
</div>
   </>
  );
}

export default App;
