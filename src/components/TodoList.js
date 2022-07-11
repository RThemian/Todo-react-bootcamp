import React from 'react'

export const TodoList = (props) => {
  console.log("TodoList", props, props.runningList);
  return (
    <>
     <div className='text-center'>
       <h2>{props.runningList}</h2>
       <h1>TEST</h1>
       <h3>{props.runningList.isComplete}</h3>
      </div>
    
    </>
  )
}
