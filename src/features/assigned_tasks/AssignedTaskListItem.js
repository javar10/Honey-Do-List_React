import { useState } from "react";
function AssignedTaskListItem({usersTaskList, taskList, setTaskList, task}) {

    const [taskIsComplete, setTaskIsComplete] = useState(false);

    function handleClick() {
        task.assignment = null;
        setTaskList([...taskList]);
    }

    console.log(taskList);

    return (
        <>
            <li className="list-group-item">
                <input 
                    className="form-check-input me-1"
                    type="checkbox" 
                    checked={taskIsComplete} 
                    onClick={handleClick}
                    aria-label="..." 
                    id={task.id}/>
                {task.name}
            </li>
        </>
    )
}

export default AssignedTaskListItem;