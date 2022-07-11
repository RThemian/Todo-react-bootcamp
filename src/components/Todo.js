import React from 'react'
import './Todo.css';
import {useState} from 'react';
import { TodoList } from './TodoList';


const Todo = () => {

    const [value, setValue] = useState("");
    const [list, setList] = useState([]);
    
    const runningList = list ? list.map(item => <li key={item} isComplete = "false"
    >{item}</li>) : "Nothing to do yet...";

    console.log("runningList", runningList)

    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log(value);
      if (value) {
        setList([...list, {}])
      }
      setValue("");
    }

    const handleDelete = (e) => {
        e.preventDefault();
        setList("");
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
   
    <div className='text-center'>
    <TodoList
      runningList = {runningList}
      />
    </div>
    <div className='text-center'>{list ? <button onClick = {handleDelete}>Clear Completed Tasks</button> : ""}</div>
    </>
  )
}

export default Todo;