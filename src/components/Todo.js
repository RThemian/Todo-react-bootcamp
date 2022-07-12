import React from "react";
import "./Todo.css";
import { useState } from "react";
//import Box from '@material-ui/core/Box';

const Todo = (props) => {
  const [falsehood, setFalsehood] = useState(props.todo.isComplete);

  const handleComplete = () => {
    setFalsehood(!falsehood)
  }
  const handleDelete = () => {
    //can't delete an object through itself or can I?
   
  }

  return (
    <>
    
     

      
      <div className="text-center">
            <span class="badge badge-pill badge-primary">
               
            
      <input className="form-check-input" onClick = {handleComplete} type="checkbox" value="" id="flexCheckDefault"/>
   
        <h3>{props.todo.name}</h3>
        <h4>{falsehood ? "Done" : "Not Done"}</h4>
        </span>
      </div>
      
     
    </>
  );
};

export default Todo;