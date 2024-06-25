import { USERS } from '../shared/USERS';
import Dropdown from 'react-bootstrap/Dropdown';

function UserList({taskList, setTaskList, assignedList, setAssignedList, usersArray, task}) {

    function handleClick(e) {
        setAssignedList([...assignedList, task]);
        setTaskList(taskList.filter(li => li !== task));
        
    }

    return (
        <Dropdown.Menu className='userform'>
            {USERS.map(user => <Dropdown.Item onClick={handleClick}>{user}</Dropdown.Item>)}
        </Dropdown.Menu>
    );
}

export default UserList;
