import TaskList from "./TaskList";

function AssignedTasks({assignedList}) {
    return (
        <>
            <h2>Assigned Tasks</h2>
            <TaskList taskList={assignedList}/>
        </>
    );
}

export default AssignedTasks;

