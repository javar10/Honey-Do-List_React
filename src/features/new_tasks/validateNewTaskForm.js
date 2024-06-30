
export const validateNewTaskForm = (values) => {
    const errors = {};

    if (!values.task) errors.task = 'Required';
    if (!values.frequency || values.frequency === '--Choose an option--') errors.frequency = 'Required';

    return errors;
}