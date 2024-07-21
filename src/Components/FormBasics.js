import React,{useState} from "react";

const FormBasics = () => {
//    let inputValue = ""
  const [inputValue, setInputValue] = useState("")

//    console.log(inputValue)

   function updateInput(e){
        //  console.log(e.target.value)
        setInputValue(e.target.value)
   }


    return(
        <div>
            <h1>Form Basics</h1>

            <form>
                <input type="text"  name="name" placeholder="enter ur name"
                 onChange={updateInput}
                />
                {/* <button type="submit">Submit</button> */}
            </form>

            <p>{inputValue}</p>

        </div>
    )
}

export default FormBasics;