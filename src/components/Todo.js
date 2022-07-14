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
    
     

      
      <div className="text-center todo">
      
               
        
      <input
      
      onClick = {() => props.toggleComplete(props.index)} 
      type="checkbox" 
      name = "complete" 
      id="checkbox"
      checked = {props.todo.isComplete}
      />
      
      <h3 className = "checkbox"  >{props.todo.name}</h3>
       
        
      </div>
      
     
    </>
  );
};

export default Todo;