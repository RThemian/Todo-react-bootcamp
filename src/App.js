import logo1 from './logo 1.png'
import './App.css';
import Todo from './components/Todo.js';
import {TodoList} from './components/TodoList.js';
import React, {useState} from 'react';


function App() {

  const [value, setValue] = useState('');
  const [list, setList] = useState([]);

  return (
    <>
    
    <div className ="row">
    <header className = "header">
      <div className = "col-xs-1">
      
      <img src={logo1} alt ="logo1"/>
      </div>
      <div className ="col-xs-3">
      <h1 className = "text-white">Super To Do</h1>
       
      </div>
      </header>  
      
    </div>
   
     <Todo/>
     <TodoList/>
   
    </>
  );
}

export default App;
