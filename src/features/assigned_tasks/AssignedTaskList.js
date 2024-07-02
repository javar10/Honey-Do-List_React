import AssignedTaskListItem from "./AssignedTaskListItem";

function AssignedTaskList({usersTaskList, taskList, setTaskList}) {
    return (
        <ul>
            {usersTaskList.map( task => <AssignedTaskListItem usersTaskList={usersTaskList} taskList={taskList} setTaskList={setTaskList} task={task}/>)} 
        </ul>
    );
}

export default AssignedTaskList;
