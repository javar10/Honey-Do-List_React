import AssignTaskBtn from "./AssignTaskBtn";

function PendingTasks({taskList, setTaskList}) {
    
    return (
        <>
            <h2>Pending Tasks</h2>
            <ul>
                {taskList.map( task => {
                    console.log(task.assignment);
                    if (task.assignment === 'pending') {
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