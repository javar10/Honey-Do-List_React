import UserList from '../UserList'
import {useState} from 'react'

function AssignTaskBtn({assignedList, setAssignedList, usersArray, task}) {
    const [displayAssignList, setDisplayAssignList] = useState(false);

    const displayList = () => setDisplayAssignList(!displayAssignList);

    return (
        <>
        <button type="button" className="btn btn-dark" id="assignTaskBtn" onClick={displayList}>
            Assign
        </button>
        {displayAssignList && <UserList assignedList={assignedList} setAssignedList={setAssignedList} usersArray={usersArray} task={task}/>}
        </>
 
    );
}

export default AssignTaskBtn;