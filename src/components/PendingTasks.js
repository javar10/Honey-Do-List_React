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
                    console.log(task.assignment);
                    if (task.assignment === null) {
                        return (
                            <>
                                <li key={task.id} className="list-group-item">{task.name}</li>
                                <AssignTaskBtn taskList={taskList} setTaskList={setTaskList} assignedList={assignedList} setAssignedList={setAssignedList} task={task}/>
                            </>
                        )
                    } else {
                        return <></>
                    }
                    
                })} 
            </ul>
        </>
    );
}

export default PendingTasks;