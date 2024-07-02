import AssignTaskBtn from "./AssignTaskBtn";

function PendingTasks({taskList, setTaskList}) {
    
    return (
        <>
            <h2>Pending Tasks</h2>
            <ul>
                {taskList.map( task => {
                    if (task.assignment === 'pending') {
                        return (
                            <div className="pending-tasks-div">
                                <li key={task.id} className="list-group-item">
                                    <h4 className="task-name">{task.name}</h4>
                                    <p>{task.frequency}</p>
                                    <p>{task.dueDate}</p>
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