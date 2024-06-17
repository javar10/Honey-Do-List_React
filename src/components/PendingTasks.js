import TaskList from "./TaskList";
import AssignList from "./UserList";
import AssignTaskBtn from "./buttons/AssignTaskBtn";
import TaskListItem from "./TaskListItem";

function PendingTasks({taskList, assignedList, setAssignedList, usersArray}) {
    return (
        <>
            <h2>Pending Tasks</h2>
            <ul>
                {taskList.map( task => {
                    return (
                        <>
                            <TaskListItem task={task}/>
                            <AssignTaskBtn assignedList={assignedList} setAssignedList={setAssignedList} usersArray={usersArray} task={task}/>
                        </>
                    )
                    
                })} 
            </ul>
        </>
    );
}

export default PendingTasks;