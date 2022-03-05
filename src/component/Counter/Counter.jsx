import {useState, useEffect} from 'react'
import './Counter.css';
export default function Counter() {
    let [counter, setCounter] = useState(10);
    useEffect(()=>{
        setCounter(100)
    }, [])
  return (
    <div className='container counter'>
        <div className="counter-wrapper">
            <div className="counter-item">
                <button onClick={()=>{setCounter((prevValue)=> prevValue > 0 ?  prevValue - 1 : 0)}}>-</button>
                <h1>{counter}</h1>
                <button onClick={()=>{setCounter((prevValue)=> prevValue + 1)}}>+</button>
            </div>
        </div>
    </div>
  )
}
