import {useState} from 'react' //we use this to add state to our component
//state lets us keep track of changing data and show it in the component    


function Form(props){



    //state: a way for us to set and refrence data that changes in our component

    useState()
    //state is an array with 2 values
    //1st value is the data we want to keep track of
    //2nd value is a function that allows us to change the data
    const [name, setName ] = useState("")
    const [URL, setURL ] = useState("")


    function handleClick(){

        //refrence the data inside of the input


        //take the last value of the input and send it to the table

       // setName(event.target.value)//update the state with the new value   
    //    console.log(name, URL) //made the change 
       props.submitFavLink({name, URL}) //send the data to the table
    }
    

    function handleNameInputChange(event){
        //we can use the event object to take a look at the input
        
        console.log(event.target.value)  //made the change
        setName(event.target.value)//update the state with the new value
    }

    function handleURLInputChange(event){

        //refrence the data inside of the input

        console.log(event.target.value) //made the change
        //take the last value of the input and send it to the table
        setURL(event.target.value) //update the state with the new value    
    }
    return(
        <div>
        <form>
            
            <label>Name</label>
            <input type="text" onChange={handleNameInputChange}/>

            <label>URL</label>
            <input type="text" onChange={handleURLInputChange}/>

        </form>   
        
        <button onClick={handleClick}>Submit</button>
            </div>
    )
}
export default Form