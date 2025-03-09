"use client" // this is a client component
//JSX is a JS syntax in React to creat out HTML elements

import{ useState } from "react" // we use this to add state to our component
//state lsts us keep track of chaning data and shpw it in the componenent 

import Form from "./components/Form"
import Table from "./components/Table"

function HomePage (){
    return (
        <div>
            <h1> FavLinks </h1>
            
            <Form />
           
            {/*a table the user ca use to see their submission*/}
            <Table />

        </div>
    ) 
}

export default HomePage