import UserList from '../UserList'
// import {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

function AssignTaskBtn({taskList, setTaskList, assignedList, setAssignedList, usersArray, task}) {
    return (
        <Dropdown>
            <Dropdown.Toggle className="button" id="dropdown-basic">
                Assign
            </Dropdown.Toggle>
            <UserList taskList={taskList} setTaskList={setTaskList} assignedList={assignedList} setAssignedList={setAssignedList} task={task}/>
        </Dropdown>
    );
}

export default AssignTaskBtn;