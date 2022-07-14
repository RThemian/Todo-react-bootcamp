import React from "react";
import "./Todo.css";
import { useState } from "react";
//import Box from '@material-ui/core/Box';

const Todo = (props) => {
  

  console.log("PROPS TODO", props.index);

  const {toggleComplete, handleDelete, todo, index} = props;

 
 

  return (
    <>
    
     

      
      <div className="text-center todo">
      
               
        
      <input
      
      onClick = {() => toggleComplete(index)} 
      type="checkbox" 
      name = "complete" 
      id="checkbox"
      checked = {todo.isComplete}
      />
      
      <h3 className = "checkbox"  >{todo.name}</h3>
       
        
      </div>
      
     
    </>
  );
};

export default Todo;