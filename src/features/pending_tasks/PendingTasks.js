import { useSelector } from "react-redux";
import AssignTaskBtn from "./AssignTaskBtn";
import { displayTasks } from "../new_tasks/newTaskSlice";

function PendingTasks({taskList, setTaskList}) {
    const tasks = useSelector(displayTasks);
    
    return (
        <>
            <h2>Pending Tasks</h2>
            <ul>
                {tasks.map( task => {
                    if (task.assignment === 'pending') {
                        return (
                            <div className="pending-tasks-div">
                                <li key={task.id} className="list-group-item">
                                    <h4 className="task-name">{task.name}</h4>
                                    <p>{task.frequency}</p>
                                    <p>Due by: {task.dueDate}</p>
                                    </li>
                                <AssignTaskBtn className="assign-task-btn" taskList={taskList} setTaskList={setTaskList} task={task}/>
                            </div>
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