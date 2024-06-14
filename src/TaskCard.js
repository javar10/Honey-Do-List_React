
function TaskCard(props) {
    return (
        <div className="bg-light border p-4 m-2">
            <h4>{props.task.name}</h4>
            <p>{props.task.frequency}</p>
        </div>
    )
}

export default TaskCard