import AssignTaskBtn from "./buttons/AssignTaskBtn";

function PendingTasks({taskList, setTaskList}) {
    
    return (
        <>
            <h2>Pending Tasks</h2>
            <ul>
                {taskList.map( task => {
                    console.log(task.assignment);
                    if (task.assignment === null) {
                        return (
                            <>
                                <li key={task.id} className="list-group-item">{task.name}</li>
                                <AssignTaskBtn taskList={taskList} setTaskList={setTaskList} task={task}/>
                            </>
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