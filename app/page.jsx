"use client" // this is a client component
//JSX is a JS syntax in React to creat out HTML elements

import{ useState } from "react" // we use this to add state to our component
//state lsts us keep track of chaning data and shpw it in the componenent 

function HomePage (){

 //create some state keeping track of the changing count
const[count, setCount] = useState(0) //useState is a hook that allows us to add state to our component


    return (

        <div>

            <h1>Counter: {count}</h1>

            <button onClick = {()=>{
                setCount(count + 1) //this will add one to the count
            }}> Add One </button>



 

        </div>

 

    ) 

}

export default HomePage