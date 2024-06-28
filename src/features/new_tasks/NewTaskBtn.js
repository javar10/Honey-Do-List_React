import '/src/App.css';
import { useState } from 'react';
import NewTaskForm from "../NewTaskForm";

function NewTaskBtn() {
    let [isNewTask, setIsNewTask] = useState(false);

    function displayForm() {
        setIsNewTask(isNewTask = true);
    }

    return (
        <div>
            {isNewTask && <NewTaskForm />}
            <button style={{backgroundColor: 'blue'}} type="button" id="newTaskBtn" onClick={displayForm}>
                New Task
            </button>
        </div>

    );
}

export default NewTaskBtn