import { useSelector, useDispatch } from "react-redux";
import { updateAssignmentToNull } from "../new_tasks/newTaskSlice";
import { displayTasks } from "../new_tasks/newTaskSlice";

function AssignedTaskListItem({ task }) {
   
    const dispatch = useDispatch();
    const taskList = useSelector(displayTasks);

    function handleClick() {
        const updatedTask = taskList[task.id];
        dispatch(updateAssignmentToNull(updatedTask));
    }

    console.log(taskList);

    return (
        <>
            <li className="list-group-item">
                <input 
                    className="form-check-input me-1"
                    type="checkbox" 
                    checked={false} 
                    onChange={handleClick}
                    aria-label="..." 
                    key={task.id}/>
                <h5>{task.name}</h5> 
                <p>Due by: {task.dueDate}</p>
            </li>
        </>
    )
}

export default AssignedTaskListItem;
