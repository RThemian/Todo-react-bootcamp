import React from "react";
import "./Todo.css";


const Todo = (props) => {
  

  console.log("PROPS TODO", props.index);

  const {toggleComplete, todo, index} = props;

 
 

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