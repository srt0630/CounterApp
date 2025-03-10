"use client" // this is a client component
//JSX is a JS syntax in React to creat out HTML elements

import{ useState } from "react" // we use this to add state to our component
//state lsts us keep track of chaning data and shpw it in the componenent 

import Form from "./components/Form"
import Table from "./components/Table"


function HomePage (){
   
   const [newFavLink, setNewFavLink] = useState({})
   
   
   //state is an array with 2 values
    // function handleNewFavLink(faveLink){
    //favLink contains an object with the name and URL of the new link  
function handleNewFavLink(favLink){
        console.log(favLink, "in HomePage") //made the change
        setNewFavLink(favLink) //update the state with the new value
}
    return (
        <div>
            <h1> FavLinks </h1>
            {/*the form is responsible for taking the input 
           and alerting the HomePage when it needs to pass it to the table
            */}
            <Form submitFavLink={handleNewFavLink} />
           
             <Table data ={newFavLink}/>

        </div>
    ) 
}

export default HomePage