import { useState } from "react";
function AssignedTaskListItem({usersTaskList, taskList, setTaskList, task}) {

    const [taskIsComplete, setTaskIsComplete] = useState(false);

    // function handleClick(e) {
        // setTaskIsComplete(true);
        // if (taskIsComplete) {
        //     setTaskList([...taskList], task.assignment === null);

        // }
        // e.preventDefault();
        // task.assignment = null;

        // const updatedTask = {...task, assignment:null};
        // setTaskList([...taskList, updatedTask]);  
        // console.log(e.target.id)
        // console.log(task);
        // setTaskList(...taskList, taskList[e.target.id].assignment = null);
    // }

    function handleClick(e) {
        task.assignment = null;
        setTaskList([...taskList]);
        // setTaskIsComplete(true);
    }

    console.log(taskList);

    return (
        <>
            <li className="list-group-item">
                <input 
                    className="form-check-input me-1"
                    type="checkbox" 
                    value="" 
                    onClick={handleClick}
                    aria-label="..." 
                    id={task.id}/>
                {task.name}
            </li>
        </>
    )
}

export default AssignedTaskListItem;