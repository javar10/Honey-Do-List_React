import { USERS } from '../../shared/USERS'; 
import Dropdown from 'react-bootstrap/Dropdown';

function UserList({taskList, setTaskList, task}) {

    function handleClick(e) {
        const updatedTask = taskList[task.id];
        updatedTask.assignment = e.target.innerText;
        setTaskList([...taskList]);
    }

    return (
        <Dropdown.Menu className='userform'>
            {USERS.map(user => <Dropdown.Item onClick={handleClick}>{user}</Dropdown.Item>)}
        </Dropdown.Menu>
    );
}

export default UserList;
