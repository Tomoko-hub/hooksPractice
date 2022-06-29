import './App.css';

import { useEffect, useState, useContext, useRef, useReducer, useMemo, useCallback } from 'react';
import ShareInfoContext from '.';
import SomeChild from './SomeChild';
import useLocalStorage from "./useLocalStorage";

const reducer = (state, action) => {
  switch(action.type) {
    case "increment" : 
      return state + 1;
    case "decrement" : 
      return state - 1;
    default:
      return state;
  }
}

function App() {

  const [count, setCount ] = useState(0);
  const shareInfo = useContext(ShareInfoContext);
  const ref = useRef();
  const [ state, dispatch ] = useReducer(reducer, 0);

  const handleClick = () =>{
    setCount(count + 1 );
  };

  useEffect(() => {
    console.log("Hello, i am useEffect.");
  }, [count]);

  const handleRef = () => {
      console.log(ref.current.value);
      console.log(ref);
  };

  //useMemo
  const [ count01, setCount01 ] = useState(0);
  const [ count02, setCount02 ] = useState(0);

  const square = useMemo(() => {
    let i = 0;
    while (i < 20) {
      i++;
    }
    return count02 * count02;
  }, [count02]);

  //useCallback
  const [ counter, setCounter ] = useState(0);

  /*const showCount = () => {
    alert(`Tuli vähän painavaa.`)
  };*/

  const showCount = useCallback(()=> {
    alert(`Ooooo... Heavy!`);
  }, [counter]);

  // custom Hook
  const [ age, setAge ] = useLocalStorage("age", 24);

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}> + </button>
      <p>{ count }</p>
      <hr />
      <h1>useContext</h1>
      <p>{shareInfo.name}</p>
      <p>{shareInfo.age}</p>
      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>useRef</button>
      <hr />
      <h1>useReducer</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <p>Count : { state }</p>
      <hr />
      <h1>useMemo</h1>
      <div> count1 : {count01}</div>
      <div> count2 : {count02}</div>
      <div>Result : {square} </div>
      <button onClick={()=> setCount01(count01 + 1)}>+</button>
      <button onClick={()=> setCount02(count02 + 1)}>+</button>
      <hr />
      <h1>useCallback</h1>
      <SomeChild showCount={showCount} />
      <hr />
      <h1>customHook</h1>
      <p>{age}</p>
      <button onClick={()=> setAge(80)}>Set your age.</button>
    </div>
  );
}

export default App;
