import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const handleClick = () => {
    console.log("Hola Sheets")
  }  

  useEffect(() => {
    
      axios.get("https://sheet.best/api/sheets/b84ff152-9edf-4731-9241-73beccd90047")
        .then( ({data}) => console.log(data) )
        .catch( err => {console.log(data); console.log("Salio un Error Carnal")} )
  }, [])
  

  return (

    
    <div className="App">
      <button id="signin-button" onClick={handleClick}>Leer datos</button>
    </div>
  )
}

export default App
