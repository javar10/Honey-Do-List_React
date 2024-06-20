import TaskList from "./TaskList";
import AssignList from "./UserList";
import AssignTaskBtn from "./buttons/AssignTaskBtn";
import TaskListItem from "./TaskListItem";

function PendingTasks({taskList, setTaskList, assignedList, setAssignedList, usersArray}) {
    return (
        <>
            <h2>Pending Tasks</h2>
            <ul>
                {taskList.map( task => {
                    return (
                        <>
                            <li className="list-group-item">{task}</li>
                            <AssignTaskBtn taskList={taskList} setTaskList={setTaskList} assignedList={assignedList} setAssignedList={setAssignedList} task={task}/>
                        </>
                    )
                    
                })} 
            </ul>
        </>
    );
}

export default PendingTasks;