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
    <div >
      <h1>Honey-Do List</h1>
      <AssignedTasks assignedList={assignedList}/>
      <PendingTasks assignedList={assignedList} setAssignedList={setAssignedList} taskList={taskList} setTaskList={setTaskList} usersArray={usersArray}/>
      <h2>Add New Task</h2>
      <NewTaskForm taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
