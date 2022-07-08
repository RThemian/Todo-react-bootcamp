import logo1 from './logo 1.png'
import './App.css';
import TodoList from './components/TodoList.js';


function App() {
  return (
    <>
    
    <div className ="banner">
    <header>
      <div className = "col-xs-3">
      
      <img src={logo1} alt ="logo1"/>
      </div>
      <div className ="col-xs-3">
      <h1 className="headline">Super To Do</h1>
       
      </div>
      </header>  
      
    </div>
   
     <TodoList/>
   
    </>
  );
}

export default App;
