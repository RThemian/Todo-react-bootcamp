import logo1 from "./logo 1.png";
import "./App.css";
import Todo from "./components/Todo.js";
//import { TodoList } from "./components/TodoList.js";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  //make todos an array for methods
  const [todos, setTodos] = useState([]);

 
  function toggleComplete(index) {

    //create a copy of completed task name but with isComplete = !isComplete
    //reinsert this value into the todos array in the correct index location

   
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    
    setTodos([...newTodos])
    
  }

 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      let newTask = { name: value, isComplete: false };

      setTodos([...todos, newTask]);
    }

    setValue("");
  };

 

  const handleDelete = (e) => {
    e.preventDefault();
    let inCompleteTasks = todos.filter(element => element.isComplete === false);
    setTodos([...inCompleteTasks]);
  }
  let trueCheck = [...todos.filter((element) => element.isComplete === true)];

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
        {todos.map((todo, index) => {
          return <Todo 
          index = {index}
          key = {Math.random()*(index + 1)}
        
          toggleComplete = {toggleComplete} 
          todo={todo} 
          />;
        })}
      </div>
      <div className="text-center">
        {trueCheck.length > 0 ? <button onClick = {handleDelete}>Clear completed tasks</button> : ""}
      </div>
    </>
  );
}

export default App;