import React from "react";
import "./Todo.css";
import { useState } from "react";
//import Box from '@material-ui/core/Box';

const Todo = (props) => {
  const [falsehood, setFalsehood] = useState();

  console.log("PROPS TODO", props.index);

  // const handleComplete = (event) => {
    
  //   console.log("HandleComplete", event)
    

  //   setFalsehood(!falsehood)
  // }
  const handleDelete = () => {
    //can't delete an object through itself or can I?
   
  }
//props.toggleComplete(props.todo);

  return (
    <>
    
     

      
      <div className="text-center">
      <span className="badge badge-pill badge-primary">
               
        <label>Task complete?</label>
      <input  onClick = {() => props.toggleComplete(props.index)} type="checkbox" name = "complete" id="checkbox"/>
   
        <h3>{props.todo.name}</h3>
       
        </span>
      </div>
      
     
    </>
  );
};

export default Todo;