import AssignedTaskList from "./AssignedTaskList";
import { displayTasks } from "../new_tasks/newTaskSlice";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import AssignedTaskListItem from "./AssignedTaskListItem";

function AssignedTasks() {
    const taskList = useSelector(displayTasks);
    const usersList = useSelector(selectAllUsers);

    return (
        <div className="row assigned-tasks-div">
            {usersList.map(user => {
                const usersTaskList = taskList.filter(task => task.assignment === user);
                console.log(usersTaskList);
                return (
                    <div key={user} className="col users-assigned-tasks-div">
                        <h2>{user}'s Assigned Tasks</h2>
                        <ul>
                            {usersTaskList.map(task => <AssignedTaskListItem task={task} />)}
                        </ul>
                    </div>
                )
            })}

        </div>
    );
}

export default AssignedTasks;

