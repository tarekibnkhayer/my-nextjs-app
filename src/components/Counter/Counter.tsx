"use client";
import { useState } from "react";
const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    return (
        <div>
             <h2>Count : {counter}</h2>
      <button  onClick={()=> setCounter(counter + 1)}>Increase</button>
      <br />
      <button onClick={()=> setCounter(counter - 1)}>Increase</button>
        </div>
    );
};

export default Counter;