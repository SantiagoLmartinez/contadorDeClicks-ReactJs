import './App.css';
import { useState } from 'react';

function App() {
  const [click, setClick] = useState(0)

  const handleClick = () => {
    setClick(click + 1)

  }

  const handleClickRestart = () => {
    setClick(0)
  }

  return (
    <div className="App">

    <div className='app-container'>
    <h1 className='title'>Contador de clicks</h1>
      <div className='container'>
        <div className='contadorClicksContainer'>
          <h2>{click}</h2>
        </div>
        <div className='btn-container'>
          <button className='btn' onClick={handleClick}>Click</button>
          <button className='btn' onClick={handleClickRestart}>Reiniciar</button>
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
