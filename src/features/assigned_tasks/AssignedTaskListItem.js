
function AssignedTaskListItem({task}) {

    return (
        <>
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." id=""/>
                {task.name}
            </li>
        </>
    )
}

export default AssignedTaskListItem;