import { useState } from "react";

function UserList({assignedList, setAssignedList, usersArray, task}) {
    // const [formData, setFormData] = useState();

    function handleChange() {
        setAssignedList([...assignedList,  `${task}`]);
    }

    console.log('assigned');
    return (
        <select onChange={handleChange}>
            {usersArray.map(user => <option value={user}>{user}</option>)}
        </select>
    );
}

export default UserList;