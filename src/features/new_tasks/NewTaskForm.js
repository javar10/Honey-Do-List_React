import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Label, Col, FormGroup, Modal, ModalBody, ModalHeader } from "reactstrap";
import { addTask, calcDueDate } from "./newTaskSlice";
import { validateNewTaskForm } from './validateNewTaskForm';
import axios from "axios";

const NewTaskForm = () => {
    const [displayTaskForm, setDisplayTaskForm] = useState(false);

    const dispatch = useDispatch();

    const [selectedFrequency, setSelectedFrequency] = useState('');
    const handleChange = (e, setFieldValue) => {
        setSelectedFrequency(e.target.value);
        setFieldValue("frequency", e.target.value);
    }

    const [selectedAssignment, setSelectedAssignment] = useState('');
    const handleAssignmentChange = (e, setFieldValue) => {
        setSelectedAssignment(e.target.value);
        setFieldValue("assignment", e.target.value);
    }

    const [taskCounter, setTaskCounter] = useState(0);
    const handleSubmit = async (values, {resetForm}) => {
        const dateCreated = new Date();
        const dateCreatedString = dateCreated.toISOString();
        
        let dueDate = calcDueDate(dateCreated, values.frequency);
        if (!dueDate) {
            dueDate = `${values.oneTimeMonth}/${values.oneTimeDay}/${values.oneTimeYear}`;
        }
        const newTask = {
            id: taskCounter,
            name: values.task,
            frequency: values.frequency, 
            assignment: values.assignment, 
            dateCreated: dateCreatedString,
            dueDate: dueDate
        };

        // const newTaskDB = {
        //     // id: taskCounter,
        //     name: values.task,
        //     frequency: values.frequency, 
        //     assignedTo: values.assignment, 
        //     // dateCreated: dateCreatedString,
        //     // dueDate: dueDate
        // };

        console.log(newTask);

        dispatch(addTask(newTask));
        setTaskCounter(taskCounter + 1);
        resetForm();
        setDisplayTaskForm(false);

        //Testing to MongoDB
        try {
            const response = await axios.post('http://localhost:3000/tasks', newTask)
            alert('Data updated successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error updating data: ', error);
        }
    }

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
                            frequency: "--Choose an option--",
                            assignment: 'Pending'
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

                                <FormGroup>
                                    <Label htmlFor="newTaskAssignment" className="form-label md-2">Assign To:</Label>
                                    <Field 
                                        name="assignment"
                                        as="select"
                                        className="form-control"
                                        // onChange={e => {
                                        //     handleChange(e);
                                        //     values.frequency = e.target.value;
                                        // }}
                                        onChange={e => handleAssignmentChange(e, setFieldValue)}
                                    >
                                        {/* <option disabled>--Choose an option--</option> */}
                                        <option>Pending</option>
                                        <option>Mom</option>
                                        <option>Dad</option>
                                        <option>Lia</option>
                                    </Field>
                                    {/* <ErrorMessage name="frequency">{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage> */}
                                </FormGroup>

                                {selectedFrequency === 'One-Time' && 
                                    <FormGroup>
                                        <Label htmlFor="one-timeDetails" className="form-label md-2">Due Date</Label>
                                        <br></br>
                                        <Label htmlFor="oneTimeMonth" className="form-label md-2">Month</Label>
                                        <Field
                                            name="oneTimeMonth"
                                            className="form-control"
                                            as="select"
                                        >     
                                        {[...Array(12)].map((item, index) => {
                                            return (
                                                <option>{index + 1}</option>
                                            );
                                        })} 
                                        </Field>
                                        <Label htmlFor="oneTimeDay" className="form-label md-2">Day</Label>
                                        <Field
                                            name="oneTimeDay"
                                            className="form-control"
                                            as="select"
                                        > 
                                        {[...Array(31)].map((item, index) => {
                                            return (
                                                <option>{index + 1}</option>
                                            );
                                        })}    
                                        </Field>
                                        <Label htmlFor="oneTimeYear" className="form-label md-2">Year</Label>
                                        <Field
                                            name="oneTimeYear"
                                            className="form-control"
                                            placeholder="YYYY"
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