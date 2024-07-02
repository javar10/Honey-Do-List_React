import AssignedTaskList from "./AssignedTaskList";
import { USERS } from "../../shared/USERS";

function AssignedTasks({taskList, setTaskList}) {
    return (
        <div className="row assigned-tasks-div">
            {USERS.map(user => {
                const usersTaskList = taskList.filter(task => task.assignment === user);
                console.log(usersTaskList);
                return (
                    <div key={user} className="col users-assigned-tasks-div">
                        <h2>{user}'s Assigned Tasks</h2>
                        <AssignedTaskList usersTaskList={usersTaskList} taskList={taskList} setTaskList={setTaskList}/>
                    </div>
                )
            })}
            
        </div>
    );
}

export default AssignedTasks;

