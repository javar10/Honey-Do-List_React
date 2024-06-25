import TaskList from "./TaskList";
import { USERS } from '../shared/USERS';

function AssignedTasks({assignedList}) {
    console.log(USERS);
    return (
       <>
            {USERS.map(user => {
                return (
                    <div className="col">
                        <h2>{user}'s Assigned Tasks</h2>
                        <TaskList taskList={assignedList}/>
                    </div>
                )
              
            })}
            
        </>
    );
}

export default AssignedTasks;

