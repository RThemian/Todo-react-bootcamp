import React from 'react'
import './TodoList.css';


const TodoList = () => {
  return (
    <>
    <div className = "text-center">
      <h1 className='text-dark text-xl'>Task list</h1>
      
      <input
        type = 'text'
        placeholder = 'Add new task...'
      />
      {'  '}<button type="submit"  >Add</button>
      
      </div>
    <div></div>
    </>
  )
}

export default TodoList;