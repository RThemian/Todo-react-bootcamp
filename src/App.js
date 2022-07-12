import logo1 from "./logo 1.png";
import "./App.css";
import Todo from "./components/Todo.js";
//import { TodoList } from "./components/TodoList.js";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  //make todos an array for methods
  const [todos, setTodos] = useState([]);

  

  //index must be sent with this function 
  //this index only exists in App.js so have to alter it here
  const toggleComplete = (index) => {

    //create a copy of completed task name but with isComplete = !isComplete
    //reinsert this value into the todos array in the correct index location

    let completedTask = {name: todos.name[index], isComplete: !todos.isComplete[index]}

    setTodos([...todos, completedTask])
    
  }

 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      let newTask = { name: value, isComplete: false };

      setTodos([...todos, newTask]);
    }

    setValue("");
  };

 

  const handleDelete = () => {
    
  }


  console.log(todos);
  return (
    <>
      <div className="row App">
        <header className="header">
          <div className="col-xs-1">
            <img src={logo1} alt="logo1" />
          </div>
          <div className="col-xs-3">
            <h1 className="text-white">Super To Do</h1>
          </div>
        </header>
      </div>
      <div className="text-center">
        <h1 className="text-dark text-xl">Task list</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Add new task..."
          />
          {"  "}
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        {todos.map((todo) => {
          return <Todo 
          handleDelete = {handleDelete} 
          toggleComplete = {toggleComplete} 
          todo={todo} 
          />;
        })}
      </div>
    </>
  );
}

export default App;