import React from "react";
import "./Todo.css";
import { useState } from "react";
//import Box from '@material-ui/core/Box';

const Todo = (props) => {
  const [falsehood, setFalsehood] = useState();

  console.log("PROPS TODO", props);

  // const handleComplete = (event) => {
    
  //   console.log("HandleComplete", event)
    

  //   setFalsehood(!falsehood)
  // }
  const handleDelete = () => {
    //can't delete an object through itself or can I?
   
  }
props.toggleComplete(props.todo);

  return (
    <>
    
     

      
      <div className="text-center">
      <span class="badge badge-pill badge-primary">
               
            
      <input className="form-check-input" onClick = {(event, index) => {props.toggleComplete(event, index)}} type="checkbox" value="" id="flexCheckDefault"/>
   
        <h3>{props.todo.name}</h3>
        <h4>{falsehood ? "Complete" : "Incomplete"}</h4>
        </span>
      </div>
      
     
    </>
  );
};

export default Todo;