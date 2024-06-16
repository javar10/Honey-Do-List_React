import {useState} from "react";

function NewTaskForm({newTask, setNewTask}) {
    const [formData, setFormData] = useState({task: "", frequency: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };

    function handleSubmit(event) {
        event.preventDefault();
        setNewTask({task: formData.task, frequency: formData.frequency});
        alert(`${formData.task} was added to task list with a frequency of ${formData.frequency}`);
    }

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
                        <option value="One-Time">One-Time</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Bi-Weekly">Bi-Weekly</option>
                        <option value="Monthly">Monthly</option>
                    </select>
                </div>
                <button type="submit" name="button" className="btn btn-light" value="submit">Submit</button>
            </form>
        </>
    );
}

export default NewTaskForm;