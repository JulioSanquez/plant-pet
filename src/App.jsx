import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const handleClick = () => {
    console.log("Hola Sheets")
  }  

  useEffect(() => {
    const getSome = async () =>{
      const doc = new GoogleSpreadsheet('1ltPRJdt_KdFI5tuHmfXMvq571Xx2FQAdbOCLvN-jvgc');
      
      const auth = new GoogleAuth({
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
      });
      
      const credentials = await auth.getClient();
      
      doc.useServiceAccountAuth(credentials, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Auth success');
          doc.getInfo((error, info) => {
            if (error) {
              console.log(error);
            } else {
              console.log(info.title);
              console.log(info.author.email);
            }
          });
        }
      });
    }

    getSome()
    
  },[])


  

  return (

    
    <div className="App">
      <button id="signin-button" onClick={handleClick}>Leer datos</button>
    </div>
  )
}

export default App
