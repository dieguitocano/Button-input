import { useState } from 'react'
import './App.css'

function App() {

  const [isBoolean, setIsBoolean] = useState(true)

  const buttonIsBoolean = () => setIsBoolean(!isBoolean)

  //const [visibility, setVisibility] = useState(true)

  /*const changeVisibility = () => {
    setVisibility(false)
    if(visibility === false){
      setVisibility(true)
    }
  }*/

  

  return (
    <div className="App">
      <h1>Input</h1>
      <input type={isBoolean ? 'password' : 'text'/*visibility ? 'password' : 'text'*/} />
      <button 
       onClick={buttonIsBoolean/*changeVisibility*/}
       >
       {isBoolean ? 'show' : 'hide'} pass
       </button>
    </div>
  )
}

export default App
