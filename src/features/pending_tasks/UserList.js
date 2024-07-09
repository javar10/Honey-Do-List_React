import { USERS } from '../../shared/USERS'; 
import Dropdown from 'react-bootstrap/Dropdown';
import { displayTasks, updateAssignmentToMom } from "../new_tasks/newTaskSlice";
import { useSelector, useDispatch } from 'react-redux';

function UserList({ task }) {
    const dispatch = useDispatch();
    const taskList = useSelector(displayTasks);
    
    function handleClick(e) {
        // TODO: log user and update user name as the assignment
        // console.log(e.target);
        // const userSelected = e.target.textContent;
        // console.log(userSelected);
        
        const updatedTask = taskList[task.id];
        dispatch(updateAssignmentToMom(updatedTask));
    }

    return (
        <Dropdown.Menu className='userform'>
            {USERS.map(user => <Dropdown.Item key={task.id} onClick={handleClick}>{user}</Dropdown.Item>)}
        </Dropdown.Menu>
    );
}

export default UserList;
