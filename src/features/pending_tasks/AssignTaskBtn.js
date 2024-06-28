import UserList from './UserList';
import Dropdown from 'react-bootstrap/Dropdown';

function AssignTaskBtn({taskList, setTaskList, task}) {
    return (
        <Dropdown>
            <Dropdown.Toggle className="button btn-assign" id="dropdown-basic">
                Assign
            </Dropdown.Toggle>
            <UserList taskList={taskList} setTaskList={setTaskList} task={task}/>
        </Dropdown>
    );
}

export default AssignTaskBtn;