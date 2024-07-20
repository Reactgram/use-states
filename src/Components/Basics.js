import React,{useState} from "react"

console.log("I am outside")
let a = 100

const Basics = () => {
        let [count,manageCount] = useState(100)
        

        // count = 102

        console.log("I am inside", count, a)

        

         function inc1(){
            manageCount(count+1)
         }
         function inc2(){
                    a = a + 1
                    console.log(a)
         }
        


    return(
        <div>
            <h1>UseState: {count}</h1>
            <button onClick={inc1}> Update </button>
            <h1>Normal: {a}</h1>
            <button onClick={inc2}> Increase </button>
        </div>
    )
}


export default Basics;


 // console.log("count",x[0])
        // console.log("function",x[1])
        // let count = x[0]
        // let fun1 = x[1]
        // x = [100,f]
        // let [count,fun1] = x

// const Basics = () => {

//     let a = 100
    
//     function inc(){
//         a = a + 1
//         console.log(a)
//     }

//     return(
//         <div>
//             <h1>{a}</h1>
//             <button onClick={inc}>Increase</button>
//         </div>
//     )
// }


// let arr = []
// arr = [10,20]

// const arr = []