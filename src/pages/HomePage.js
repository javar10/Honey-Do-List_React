
import AssignedTasks from "../features/assigned_tasks/AssignedTasks"
import NewTaskForm from "../features/new_tasks/NewTaskForm";
import PendingTasks from '../features/pending_tasks/PendingTasks';

const HomePage = () => {

  return (
      
    <div className="container">
      <AssignedTasks />  
      
      <div className="row">
        <PendingTasks className="col" />
      </div>
      
      <div className="row">
        <h4>Add a new Task</h4>
        <NewTaskForm />
      </div>

    </div>
  )
}

export default HomePage;