
function NewTaskForm() {
    return (
        <>
            <form id="newTaskForm">
                <div className="mb-3">
                    <label htmlFor="newTaskName" className="form-label">Task Name</label>
                    <input type="text" className="form-control" id="newTaskName" />
                </div>
                <select className="form-select" aria-label="Default select example" id="newTaskFrequency">
                    <option defaultValue disabled>Frequency</option>
                    <option value="One-Time">One-Time</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Bi-Weekly">Bi-Weekly</option>
                    <option value="Monthly">Monthly</option>
                </select>
                <button type="submit" className="btn btn-light">Submit</button>
            </form>
        </>
    );
}

export default NewTaskForm;