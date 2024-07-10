import { useSelector } from "react-redux";
import AssignTaskBtn from "./AssignTaskBtn";
import { displayTasks } from "../new_tasks/newTaskSlice";

function PendingTasks() {
    const taskList = useSelector(displayTasks);
    console.log(JSON.stringify(taskList, null, 2));
    return (
        <>
            <h2 key='pendingTasks'>Pending Tasks</h2>
            <ul>
                {taskList.map( task => {
                    if (task.assignment === 'pending') {
                        return (
                            <div key={task.id} className="pending-tasks-div">
                                <li className="list-group-item">
                                    <h4 className="task-name">{task.name}</h4>
                                    <p>{task.frequency}</p>
                                    <p>Due by: {task.dueDate}</p>
                                    <AssignTaskBtn className="assign-task-btn" task={task}/>
                                </li>
                                
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