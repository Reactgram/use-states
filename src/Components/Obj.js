
import React,{useState} from "react";

let Obj = () => {

    let [coins, setCoins] = useState({gold:0, silver:0, bronze:0})

    console.log("coins",coins) 
    // coins = {gold:0, silver:0, bronze:0}
    // coins = {gold:1,silver:0,bronze:0}

    function incGold(){
        //  coins.gold = coins.gold + 1 => wrong
        // setCoins(coins.gold+1)
        setCoins({...coins,gold:coins.gold+1})
    }


    return(
        <div>
            <h1>Object</h1>
            <h2>Gold: {coins.gold} Silver:{coins.silver} Bronze:{coins.bronze}</h2>

            <button onClick={incGold}>Increse Gold</button>

            <button onClick={()=>setCoins({...coins,silver:coins.silver+1})}>Increse Silver</button>

           {/* complete the bronze part */}
            <button>Increse Bronze</button>
        </div>
    )
}

export default Obj;