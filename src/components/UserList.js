import { useState } from "react";

function UserList({setDisplayAssignList,taskList, setTaskList, assignedList, setAssignedList, usersArray, task}) {
    // const [formData, setFormData] = useState();

    function handleChange(e) {
        setAssignedList([...assignedList, task]);
        const taskIdx = taskList.indexOf(task);
        console.log(taskList);
        console.log(taskIdx);
        setTaskList(taskList.filter(li => li !== task));
        setDisplayAssignList(false);
    }

    return (
        <select onChange={handleChange}>
            {usersArray.map(user => <option value={user}>{user}</option>)}
        </select>
    );
}

export default UserList;