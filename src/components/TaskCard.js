import { useState } from "react"

function TaskCard({task}) {
    // const [tasks, setTasks] = useState([]);

    return (
        <>
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." id=""/>
                {task}
            </li>
        </>
    )
}

export default TaskCard