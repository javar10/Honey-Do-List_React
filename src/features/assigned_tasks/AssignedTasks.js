import AssignedTaskList from "./AssignedTaskList";
import { USERS } from "../../shared/USERS";
import { displayTasks } from "../new_tasks/newTaskSlice";
import { useSelector } from "react-redux";

function AssignedTasks() {
    const taskList = useSelector(displayTasks);

    return (
        <div className="row assigned-tasks-div">
            {USERS.map(user => {
                const usersTaskList = taskList.filter(task => task.assignment === user);
                console.log(usersTaskList);
                return (
                    <div key={user} className="col users-assigned-tasks-div">
                        <h2>{user}'s Assigned Tasks</h2>
                        <AssignedTaskList usersTaskList={usersTaskList}/>
                    </div>
                )
            })}
            
        </div>
    );
}

export default AssignedTasks;

