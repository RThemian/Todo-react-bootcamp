import logo1 from './logo 1.png'
import './App.css';
import TodoList from './components/TodoList.js';


function App() {
  return (
    <>
    
    <div className ="row text-white">
    <header className = "header">
      <div className = "col-xs-1">
      
      <img src={logo1} alt ="logo1"/>
      </div>
      <div className ="col-xs-3">
      <h1 className = "text-white">Super To Do</h1>
       
      </div>
      </header>  
      
    </div>
   
     <TodoList/>
   
    </>
  );
}

export default App;
