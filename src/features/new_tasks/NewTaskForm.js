import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Label, Col, FormGroup, Modal, ModalBody, ModalHeader } from "reactstrap";
import { Task } from "./newTaskSlice";
import { validateNewTaskForm } from './validateNewTaskForm';

function NewTaskForm({taskList, setTaskList}) {
    const [displayTaskForm, setDisplayTaskForm] = useState(false);

    const [taskCounter, setTaskCounter] = useState(0);
    function handleSubmit(values, {resetForm}) {
        const dateCreated = new Date();

        const newTask = new Task(taskCounter, values.task, values.frequency, 'pending', dateCreated);
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
                                <Label htmlFor="newTaskFrequency" className="form-label md-2">Frequency   </Label>
                                <Field 
                                    name="frequency"
                                    as="select"
                                    className="form-control"
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
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>

        </>
    );
}

export default NewTaskForm;