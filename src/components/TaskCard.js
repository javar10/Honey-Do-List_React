import { useState } from "react"

function TaskCard(props) {
    const [tasks, setTasks] = useState([]);

    return (
        <>
            <p>{props.newTask}</p>
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." id={`task${props.task.id}`}/>
                {props.task.name}
            </li>
        </>
    )
}

export default TaskCard