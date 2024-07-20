import React, {useState} from "react";
import { FaPlus,FaMinus } from "react-icons/fa";
 // kite => setKite 

    // helloWorld =>setHelloWorld

let  Counter = () => {

    const [a, setA] = useState(0);
     
     function inc(){
          setA(a+1)
     }



    return(
        <div>
               <h1>Counter</h1>
                <h2>{a}</h2>

                <button onClick={inc}> <FaPlus className="icons"/> </button>
                <button onClick={()=>setA(a-1)}> <FaMinus className="icons"/> </button>
                <button onClick={()=>setA(0)}>Reset</button>
        </div>
    )
}

export default Counter;