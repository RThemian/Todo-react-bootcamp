import React from 'react'
import './Todo.css';
import {useState} from 'react';


const Todo = () => {

    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    let listHolder =[];


    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log(value);
      if (value) {
        setList([...list, value])
      }
      console.log("list", list)
    
       listHolder = list.map(item => <li>{item}</li>)

    }
    console.log("LISTHOLDER", listHolder)

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
    <div>{listHolder ? listHolder : "Nothing to do, yet..."}</div>
    <div>
    {
      /*  This maps each array item to a div adds
      the style declared above and return it */
      list ? list.map(item => <li key={item} 
            >{item}</li>) : "Nothing to do yet..."
    }
    </div>
    <div>{list ? <button>Clear All Todos</button> : ""}</div>
    </>
  )
}

export default Todo;