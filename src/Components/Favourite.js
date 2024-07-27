
import React,{useState} from "react";



let fruits = ["apple", "banana", "orange"]

const Favourite = () => {
    let [furitCollection, setFruitCollection] = useState(fruits)
    let [newFruit, setNewFruit] = useState("")
    
    console.log("value",newFruit)

    function addFavourite(e){
        e.preventDefault()
        // setFruitCollection(e.target.value)
        setFruitCollection([...furitCollection, newFruit])
        setNewFruit("")
    }

   

    return(
        <div>
             <form onSubmit={addFavourite}>
                    <input type="text" placeholder="new Fruit" 
                     onChange={(e) => setNewFruit(e.target.value)}
                     value = {newFruit}
                    />
                    <button type="submit">Add</button>
             </form>

             {/* display the fruits */}
             {
                    furitCollection.map((fruit, index) => (
                            <div key={index}>
                                <h3>{fruit}</h3>
                            </div>
                        )
                    )
             }
        </div>
    )
}


export default Favourite;