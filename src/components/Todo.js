import React from 'react'
import './Todo.css';
import {useState} from 'react';


const Todo = () => {

    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    
    

    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log(value);
      if (value) {
        setList([...list, value])
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
    {
      /*  This maps each array item to a div adds
      the style declared above and return it */
      list ? list.map(item => <li key={item} isComplete = "false"
            >{item}</li>) : "Nothing to do yet..."
    }
    </div>
    <div className='text-center'>{list ? <button onClick = {handleDelete}>Clear Completed Tasks</button> : ""}</div>
    </>
  )
}

export default Todo;