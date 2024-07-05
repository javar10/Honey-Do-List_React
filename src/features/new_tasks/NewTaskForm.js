import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Label, Col, FormGroup, Modal, ModalBody, ModalHeader } from "reactstrap";
import { Task, calcDueDate } from "./newTaskSlice";
import { validateNewTaskForm } from './validateNewTaskForm';

function NewTaskForm({taskList, setTaskList}) {
    const [displayTaskForm, setDisplayTaskForm] = useState(false);

    const [selectedFrequency, setSelectedFrequency] = useState('');
    const handleChange = (e, setFieldValue) => {
        setSelectedFrequency(e.target.value);
        setFieldValue("frequency", e.target.value);
    }

    const [taskCounter, setTaskCounter] = useState(0);
    function handleSubmit(values, {resetForm}) {
        const dateCreated = new Date();
        const dueDate = calcDueDate(dateCreated, values.frequency);
        const newTask = new Task(taskCounter, values.task, values.frequency, 'pending', dateCreated, dueDate);
        setTaskList([...taskList, newTask]);
        setTaskCounter(taskCounter + 1);
        resetForm();
        setDisplayTaskForm(false);
    }

    console.log(taskList);

    return (
        <>
            <Button className="addNewTask" onClick={() => setDisplayTaskForm(true)}>+ Add New Task</Button>
            <Modal isOpen={displayTaskForm}>
                <ModalHeader toggle={() => setDisplayTaskForm(false)}>
                    Add New Task
                </ModalHeader>
                <ModalBody>
                    <Formik 
                        initialValues={{
                            task: "", 
                            frequency: "--Choose an option--"
                        }}
                        onSubmit={handleSubmit}
                        validate={validateNewTaskForm}
                    >
                        {({ setFieldValue }) => (
                            <Form>
                                <h2>Add New Task</h2>
                                <FormGroup>
                                    <Label htmlFor="newTaskName" className="form-label md=2">Task Name</Label>
                                    <Field
                                        name="task"
                                        placeholder="Enter Task"
                                        className="form-control"
                                    />
                                </FormGroup>
                                <ErrorMessage name="task">{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>

                                <FormGroup>
                                    <Label htmlFor="newTaskFrequency" className="form-label md-2">Frequency</Label>
                                    <Field 
                                        name="frequency"
                                        as="select"
                                        className="form-control"
                                        // onChange={e => {
                                        //     handleChange(e);
                                        //     values.frequency = e.target.value;
                                        // }}
                                        onChange={e => handleChange(e, setFieldValue)}
                                    >
                                        <option disabled>--Choose an option--</option>
                                        <option>One-Time</option>
                                        <option>Daily</option>
                                        <option>Weekly</option>
                                        <option>Bi-Weekly</option>
                                        <option>Monthly</option>
                                    </Field>
                                    <ErrorMessage name="frequency">{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
                                </FormGroup>

                                {selectedFrequency === 'One-Time' && 
                                    <FormGroup>
                                        <Label htmlFor="one-timeDetails" className="form-label md-2">Due Date</Label>
                                        <br></br>
                                        <Label htmlFor="one-timeMonth" className="form-label md-2">Month</Label>
                                        <Field
                                            name="one-timeMonth"
                                            className="form-control"
                                            as="select"
                                        >     
                                        <option>1</option>
                                        <option>2</option>
                                        </Field>
                                        <Label htmlFor="one-timeDay" className="form-label md-2">Day</Label>
                                        <Field
                                            name="one-timeDay"
                                            className="form-control"
                                            as="select"
                                        >     
                                        </Field>
                                        <Label htmlFor="one-timeYear" className="form-label md-2">Year</Label>
                                        <Field
                                            name="one-timeYear"
                                            className="form-control"
                                            as="select"
                                        >     
                                        </Field>
                                    
                                    </FormGroup>}
                                <Button type="submit">Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </Modal>

        </>
    );
}

export default NewTaskForm;