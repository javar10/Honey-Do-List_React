// Not currently using!!!


import AssignedTaskListItem from "./AssignedTaskListItem";

function AssignedTaskList({ usersTaskList }) {
    return (
        <ul>
            {usersTaskList.map(task => <AssignedTaskListItem task={task} />)}
        </ul>
    );
}

export default AssignedTaskList;
