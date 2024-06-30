import './App.css';
import honeydew from './assets/HoneydewIMG2.png';
import AssignedTasks from './features/assigned_tasks/AssignedTasks';
// import NewTaskBtn from './features/new_tasks/NewTaskBtn';
import NewTaskForm from "./features/new_tasks/NewTaskForm";
import PendingTasks from './features/pending_tasks/PendingTasks';
import { useState } from "react";

function App() {

  const [taskList, setTaskList] = useState([]);
  
  return (
    <div className="container">
      <div className="header">  
        <img src={honeydew} height="50rem" />
        <h1>Honey-Do List</h1>
      </div>
      
        <AssignedTasks taskList={taskList} setTaskList={setTaskList}/>  
      
      <div className="row">
        <PendingTasks className="col" taskList={taskList} setTaskList={setTaskList}/>
      </div>
      <div className="row">
        <NewTaskForm taskList={taskList} setTaskList={setTaskList}/>
      </div>

    </div>
  );
}

export default App;
