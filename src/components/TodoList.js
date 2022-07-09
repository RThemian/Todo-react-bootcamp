import React, { useState } from 'react'

export const TodoList = (props) => {
    const [list, setList] = useState([]);

    const handleDelete = (e) => {
        e.preventDefault();
        setList("");
    }

  return (
      <div>
        <h3>TodoList</h3>
        <div>
    {
        /*  This maps each array item to a div adds
        the style declared above and return it */
        list ? list.map(item => <li key={item} isComplete = "false"
              >{item}</li>) : "Nothing to do yet..."
      }
      </div>
      <div>{list ? <button onClick = {handleDelete}>Clear Completed Tasks</button> : ""}
      </div>
      </div>
      )
}
