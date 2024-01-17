"use client";
import { useState } from "react";
const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    return (
        <div>
             <h2>Count : {counter}</h2>
      <button className="btn mt-4  btn-primary" onClick={()=> setCounter(counter + 1)}>Increase</button>
      <br />
      <button className="btn mt-4 btn-primary" onClick={()=> setCounter(counter - 1)}>Decrease</button>
        </div>
    );
};

export default Counter;