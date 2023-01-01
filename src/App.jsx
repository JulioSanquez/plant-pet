import './App.css'

function App() {

  const handleClick = () => {
    console.log("Hola Sheets")
  }  

  return (
    <div className="App">
      <button id="signin-button" onClick={handleClick}>Leer datos</button>
    </div>
  )
}

export default App
