import AssignedTaskListItem from "./AssignedTaskListItem";

function AssignedTaskList({taskList}) {
    return (
        <ul>
            {taskList.map( task => <AssignedTaskListItem task={task}/>)} 
        </ul>
    );
}

export default AssignedTaskList;
