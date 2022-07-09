import React from 'react'
import './Todo.css';
import {useState} from 'react';
import { TodoList } from './TodoList';


const Todo = (props) => {

    console.log("PROPS TODO", props);
    const [list, setList] = useState([])
    const [value, setValue] = useState('');
    

    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log(value);
      if (value) {
        setList([...list, value])
      }
      setValue("");
    }

   


  return (
    <>
    <div className = "text-center">
      <h1 className='text-dark text-xl'>Task list</h1>
      <form onSubmit = {handleSubmit}>
      <input
        value = {value}
        onChange = {(e) => setValue(e.target.value)}
        type = 'text'
        placeholder = 'Add new task...'
      />
      {'  '}<button type="submit"  >Add</button>
      </form>
      </div>
   
    <div>
    </div>
    
    </>
  )
}

export default Todo;