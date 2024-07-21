import React,{useState} from "react";

const FormBasics2 = () => {

  const [inputValue, setInputValue] = useState("")
  const [btnClick, setBtnClick] = useState(false)

  console.log(inputValue, btnClick)


  function  handleSubmit(e){
       e.preventDefault()
       setBtnClick(true)
  }

  function updateInputValue(e){
      setInputValue(e.target.value)
      if(btnClick==true){
          setBtnClick(false)
      }
  }

    return(
        <div>
            <h1>Form Basics</h1>

            <form onSubmit={handleSubmit}>
                <input type="text"  name="name" placeholder="enter ur name" onChange={updateInputValue}
                />
                <button type="submit">Submit</button>
            </form>

            <p>
                   {btnClick==true? inputValue : " "}
            </p>

        </div>
    )
}

export default FormBasics2;