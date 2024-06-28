import {useState} from "react";
import {Task} from "./newTaskSlice";

function NewTaskForm({taskList, setTaskList}) {
    const initialFormData = {task: "", frequency: ""};
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };

    const [taskCounter, setTaskCounter] = useState(0);
    function handleSubmit(event) {
        event.preventDefault();
        const newTask = new Task(taskCounter, formData.task, formData.frequency, 'pending');
        console.log(newTask);
        setTaskList([...taskList, newTask]);
        setTaskCounter(taskCounter + 1);
        setFormData(initialFormData);
    }
    console.log(taskList);

    return (
        <>
            <form onSubmit={handleSubmit} id="newTaskForm">
                <div className="mb-3">
                    <label htmlFor="newTaskName" className="form-label">Task Name</label>
                    <input name="task" type="text" className="form-control" id="newTaskName" value={formData.task} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="newTaskFrequency" className="form-lable">Frequency</label>
                    <select name="frequency" className="form-select" aria-label="Default select example" id="newTaskFrequency" value={formData.frequency} onChange={handleChange}>
                        <option value="" disabled>--Choose an option--</option>
                        <option value="One-Time">One-Time</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Bi-Weekly">Bi-Weekly</option>
                        <option value="Monthly">Monthly</option>
                    </select>
                </div>
                <button type="submit" name="button" className="btn btn-primary" value="submit">Submit</button>
            </form>
        </>
    );
}

export default NewTaskForm;