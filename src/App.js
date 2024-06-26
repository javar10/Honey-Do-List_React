import './App.css';
import honeydew from './assets/HoneydewIMG2.png';
import AssignedTasks from "./components/AssignedTasks";
import NewTaskForm from "./components/NewTaskForm";
import PendingTasks from "./components/PendingTasks";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {

  const [taskList, setTaskList] = useState([]);
  
  return (
    <div className="container">
      <div className="header">  
        <img src={honeydew} height="50rem" />
        <h1>Honey-Do List</h1>
      </div>
      
        <AssignedTasks taskList={taskList}/>  
      
      <div className="row">
        <PendingTasks className="col" taskList={taskList} setTaskList={setTaskList}/>
      </div>
      <div className="row">
        <div className="col">
          <h2>Add New Task</h2>
          <NewTaskForm taskList={taskList} setTaskList={setTaskList}/>
        </div>
      </div>

    </div>
  );
}

export default App;
