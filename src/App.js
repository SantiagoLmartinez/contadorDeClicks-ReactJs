import './App.css';
import { useState } from 'react';

function App() {
  const [click, setClick] = useState(0)

  const handleClick = () => {
    setClick(click + 1)

  }

  const randomNumber = () =>{
    return Math.floor(Math.random() * 6) + 1;

  }  
  const handleClickDado = () => {
    setClick(parseInt(randomNumber()))
  }

  const handleClickRestart = () => {
    // setClick(parseInt(randomNumber(1, 6)))
    setClick(0)
  }

  return (
    <div className="App">

    <div className='app-container'>
    <h1 className='title'>App Contador & Dados </h1>
      <div className='container'>
        <div className='contadorClicksContainer'>
          <h2>{click}</h2>
        </div>
        <div className='btn-container'>
          <button className='btn' onClick={handleClick}>Contador + 1</button>
          <button className='btn' onClick={handleClickDado}>Tirar Dado del 1 al 6</button>
          <button className='btn' onClick={handleClickRestart}>Reiniciar</button>
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
