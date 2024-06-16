import TaskList from "./TaskList";
import AssignList from "./AssignList";

function PendingTasks({taskList}) {
    return (
        <>
            <h2>Pending Tasks</h2>
            <TaskList taskList={taskList}/>
           
        </>
    );
}

export default PendingTasks;