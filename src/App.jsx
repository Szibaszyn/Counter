import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (incrementValue, evenColor, oddColor) => {
    const newCount = count + incrementValue;
    setCount(newCount);
    const color = newCount % 2 === 0 ? evenColor : oddColor;
    document.documentElement.style.setProperty('--basic-color', color);
    console.log(newCount % 2 === 0 ? "parzysta" : "nieparzysta");
  };

  return (
    <>
      <div className="card">
        <button className='bigger add' onClick={() => handleClick(1, "#70fff8", "#2cbfb8")}>
          +
        </button>
        <button className='bigger add' onClick={() => handleClick(10, "#70fff8", "#2cbfb8")}>
          +10
        </button>
        <button className='bigger add' onClick={() => handleClick(100, "#70fff8", "#2cbfb8")}>
          +100
        </button>
        <br></br>
        <button className='function' onClick={() => navigator.clipboard.writeText(`${count}`)}>
          Copy
        </button>
        <h1 className='countnum'>{count}</h1>
        <button className='function' onClick={() => handleClick(-count, "#ffffff", "#ffffff")}>
          Reset
        </button>
        <br></br>
        <button className='bigger unadd' onClick={() => handleClick(-1, "#8121ad", "#8f32ba")}>
          - 
        </button>
        <button className='bigger unadd' onClick={() => handleClick(-10, "#8121ad", "#8f32ba")}>
          -10
        </button>
        <button className='bigger unadd' onClick={() => handleClick(-100, "#8121ad", "#8f32ba")}>
          -100
        </button>
        <br></br>
      </div>
      <div className="tests">
        <button onClick={() => handleClick(1000, "#6200ff", "#6200ff")}>
          Test_1K
        </button>
        <button onClick={() => handleClick(1000000, "#6200ff", "#6200ff")}>
          Test_1M
        </button>
        <button onClick={() => handleClick(-count + count * 10, "#6200ff", "#6200ff")}>
          Test_X10
        </button>
        <button onClick={() => handleClick(-count + count * 100, "#6200ff", "#6200ff")}>
          Test_X100
        </button>
      </div>
    </>
  )
}

export default App
