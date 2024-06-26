import TaskList from "./TaskList";
import { USERS } from '../shared/USERS';

function AssignedTasks({taskList}) {
    return (
        <div className="row">
            {USERS.map(user => {
                const usersTasks = taskList.filter(task => task.assignment === user);
                console.log(usersTasks);
                return (
                    <div className="col">
                        <h2>{user}'s Assigned Tasks</h2>
                        <TaskList taskList={usersTasks}/>
                    </div>
                )
            })}
            
        </div>
    );
}

export default AssignedTasks;

