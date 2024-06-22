import UserList from '../UserList'
import {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { USERS } from '../../shared/USERS';

function AssignTaskBtn({taskList, setTaskList, assignedList, setAssignedList, usersArray, task}) {
    const [displayAssignList, setDisplayAssignList] = useState(false);

    const displayList = () => setDisplayAssignList(!displayAssignList);

    const [expandUsers, setExpandUsers] = useState(false);
    console.log(expandUsers);
    return (
        // <>
        //     <button type="button" id="assignTaskBtn" onClick={displayList}>
        //         Assign
        //     </button>
        //     {displayAssignList && <UserList setDisplayAssignList={setDisplayAssignList} taskList={taskList} setTaskList={setTaskList} assignedList={assignedList} setAssignedList={setAssignedList} task={task}/>}
        
        // </>
 
        // <>
        //     <div className="dropdown">
        //         <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded={expandUsers} onClick={() => setExpandUsers(!expandUsers)}>
        //             Assign Task
        //         </button>
        //         <ul className="dropdown-menu">
        //             <li><a class="dropdown-item" href="#">Action</a></li>
        //             <li><a class="dropdown-item" href="#">Another action</a></li>
        //             <li><a class="dropdown-item" href="#">Something else here</a></li>
        //         </ul>
        //     </div>
        // </>

        <Dropdown>
            <Dropdown.Toggle className="button" id="dropdown-basic">
                Assign
            </Dropdown.Toggle>
            <UserList setDisplayAssignList={setDisplayAssignList} taskList={taskList} setTaskList={setTaskList} assignedList={assignedList} setAssignedList={setAssignedList} task={task}/>
        </Dropdown>
          

 
    );
}

export default AssignTaskBtn;