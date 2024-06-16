import AssignTaskBtn from "./buttons/AssignTaskBtn"

function TaskListItem({task}) {

    return (
        <>
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." id=""/>
                {task}
                {/* <AssignTaskBtn /> */}
            </li>
        </>
    )
}

export default TaskListItem