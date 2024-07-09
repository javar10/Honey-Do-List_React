import UserList from './UserList';
import Dropdown from 'react-bootstrap/Dropdown';

function AssignTaskBtn({ task }) {
    return (
        <Dropdown>
            <Dropdown.Toggle className="button btn-assign" id="dropdown-basic">
                Assign
            </Dropdown.Toggle>
            <UserList task={task}/>
        </Dropdown>
    );
}

export default AssignTaskBtn;