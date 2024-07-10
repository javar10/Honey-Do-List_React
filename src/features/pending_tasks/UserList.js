import Dropdown from 'react-bootstrap/Dropdown';
import { displayTasks, updateAssignment } from "../new_tasks/newTaskSlice";
import { useSelector, useDispatch } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

function UserList({ task }) {
    const dispatch = useDispatch();
    const taskList = useSelector(displayTasks);
    const usersList = useSelector(selectAllUsers);
    console.log(taskList)
    function handleClick(e) {
        const assignment = e.target.textContent;
        const updatedTask = {...taskList[task.id], assignment};
        dispatch(updateAssignment(updatedTask));
    }

    return (
        <Dropdown.Menu className='userform'>
            {usersList.map((user, index) => <Dropdown.Item key={index} onClick={handleClick}>{user}</Dropdown.Item>)}
        </Dropdown.Menu>
    );
}

export default UserList;
