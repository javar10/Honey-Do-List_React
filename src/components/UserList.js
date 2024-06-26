import { USERS } from '../shared/USERS';
import Dropdown from 'react-bootstrap/Dropdown';

function UserList({taskList, setTaskList, assignedList, setAssignedList, usersArray, task}) {

    function handleClick(e) {
        setAssignedList([...assignedList, task]);
        task.assignment = e.target.innerText;
        console.log(e);
        console.log(e.target.innerText);
        console.log(task.assignment);
        // setTaskList([...taskList, ])
        // setTaskList(taskList.filter(li => li !== task));

    }
console.log(taskList);
    return (
        <Dropdown.Menu className='userform'>
            {USERS.map(user => <Dropdown.Item onClick={handleClick}>{user}</Dropdown.Item>)}
        </Dropdown.Menu>
    );
}

export default UserList;
