// import '/src/App.css';
import { useState } from 'react';
import NewTaskForm from './NewTaskForm';

function NewTaskBtn({taskList, setTaskList}) {
    const [displayForm, setDisplayForm] = useState(false);

    function displayForm() {
        setIsNewTask(isNewTask = true);
    }

    return (
        <div>
            {displayForm && <NewTaskForm taskList={taskList} setTaskList={setTaskList}/>}
            <button type="button" id="newTaskBtn" onClick={displayForm}>
                + Add New Task
            </button>
        </div>
    );
}

export default NewTaskBtn