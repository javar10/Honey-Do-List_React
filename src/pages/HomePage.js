
import AssignedTasks from "../features/assigned_tasks/AssignedTasks"
import NewTaskForm from "../features/new_tasks/NewTaskForm";
import PendingTasks from '../features/pending_tasks/PendingTasks';
import { useState } from "react";

const HomePage = () => {
  const [taskList, setTaskList] = useState([]);

  return (
      
    <div className="container">
      <AssignedTasks />  
      
      <div className="row">
        <PendingTasks className="col" />
      </div>
      
      <div className="row">
        <NewTaskForm />
      </div>

    </div>
  )
}

export default HomePage;