import AssignList from '../AssignList'
import {useState} from 'react'

function AssignTaskBtn() {
    const [displayAssignList, setDisplayAssignList] = useState(false);

    const displayList = () => setDisplayAssignList(!displayAssignList);

    return (
        <>
        <button type="button" className="btn btn-dark" id="assignTaskBtn" onClick={displayList}>
            Assign
        </button>
        {displayAssignList && <AssignList/>}
        </>
 
    );
}

export default AssignTaskBtn;