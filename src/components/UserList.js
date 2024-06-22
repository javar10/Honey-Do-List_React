import { USERS } from '../shared/USERS';
import Dropdown from 'react-bootstrap/Dropdown';

function UserList({setDisplayAssignList,taskList, setTaskList, assignedList, setAssignedList, usersArray, task}) {
    // const [formData, setFormData] = useState();

    function handleClick(e) {
        setAssignedList([...assignedList, task]);
        const taskIdx = taskList.indexOf(task);
        console.log(taskList);
        console.log(taskIdx);
        setTaskList(taskList.filter(li => li !== task));
        setDisplayAssignList(false);
    }

    return (
        // <select onChange={handleChange}>
        //     {USERS.map(user => <option value={user}>{user}</option>)}
        // </select>

        // USERS.map(user => {
        //     <Dropdown.Item >
        //         {user}
        //     </Dropdown.Item>
        // })

        <Dropdown.Menu>
            {USERS.map(user => <Dropdown.Item onClick={handleClick}>{user}</Dropdown.Item>)}
        </Dropdown.Menu>


    );
}

export default UserList;