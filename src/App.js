import './App.css';
import honeydew from './assets/HoneydewIMG2.png';
import AssignedTasks from "./components/AssignedTasks";
import NewTaskForm from "./components/NewTaskForm";
import PendingTasks from "./components/PendingTasks";
import TaskList from "./components/TaskList";
import { useState } from "react";

// time_rating options: 1: 0-30 minutes, 2: 30-60 minutes, 3: 1-2 hours, 4:2-4 hours, 5:4+ hours
// frequency options: one-time, daily, weekly, bi-weekly, monthly, every _ months
// const TaskList = [
//   {
//     id: 0,
//     name: "Wash the dishes",
//     frequency: "daily",
//     time_rating: 1,
//     assingment: null,
//     unpopular: false
//   }, 

//   {
//     id: 2,
//     name: "cut the grass",
//     frequency: "weekly",
//     time_rating: 3,
//     assingment: null,
//     unpopular: false
//   },

//   {
//     id: 3,
//     name: "clean the bathrooms",
//     frequency: "bi-weekly",
//     time_rating: 1,
//     assingment: null,
//     unpopular: false
//   }
// ];

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
        <PendingTasks className="col" assignedList={assignedList} setAssignedList={setAssignedList} taskList={taskList} setTaskList={setTaskList} usersArray={usersArray}/>
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
