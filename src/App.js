import './App.css';
import honeydew from './assets/HoneydewIMG2.png';
import AssignedTasks from "./components/AssignedTasks";
import NewTaskForm from "./components/NewTaskForm";
import PendingTasks from "./components/PendingTasks";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {

  const [taskList, setTaskList] = useState([]);
  const [assignedList, setAssignedList] = useState(['pick peaches']);
  const [usersArray, setUsersArray] = useState(['Mom', 'Dad']);

  // newTask needs to be an array, tasks, that get updated evertime a new task is added
  
  return (
    <div className="container">
      <div className="header">  {/*style={{ margin: '1rem 0', display: 'flex', alignItems: 'center' }} */}
        <img src={honeydew} height="50rem" />
        <h1>Honey-Do List</h1>
        {/* <img src={honeydew} height="50rem" style={{ display: 'inline', marginRight: '2rem', verticalAlign: 'middle' }} />
        <h1 style={{ display: 'inline', marginRight: '10px' }}>Honey-Do List</h1> */}
      </div>
      <div className="row">
        <AssignedTasks className="col" assignedList={assignedList}/>  
      </div>
      <div className="row">
        <PendingTasks className="col" assignedList={assignedList} setAssignedList={setAssignedList} taskList={taskList} setTaskList={setTaskList}/>
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
