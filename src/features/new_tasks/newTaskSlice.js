import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasksArray: []
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log('addTask action.type', action.type);
            console.log('addTask action.payload', action.payload);
            console.log('addTask state.tasksArray', state.tasksArray);
            const newTask = {
                id: state.tasksArray.length + 1,
                ...action.payload
            };
            return {
                ...state,
                tasksArray:[...state.tasksArray, newTask]
            }
        }
    }
})

export const tasksReducer = tasksSlice.reducer;
export const { addTask } = tasksSlice.actions;

export const displayTasks = (state) => {
    return state.tasks.tasksArray;
}

export const calcDueDate = (dateCreated, frequency) => {
    const dateCreatedDay = dateCreated.getDay();
    const dateCreatedMonth = dateCreated.getMonth();
    console.log(frequency);

    let dueDateUnformatted;
    switch (frequency) {
        case 'One-Time':
            return;
        case 'Daily':
            dueDateUnformatted = dateCreated.setDate(dateCreatedDay + 1);
            break;
        case 'Weekly':
            dueDateUnformatted = dateCreated.setDate(dateCreatedDay + 7);
            break;
        case 'Bi-Weekly':
            dueDateUnformatted = dateCreated.setDate(dateCreatedDay + 14);
            break;
        case 'Monthly':
            dueDateUnformatted = dateCreated.setMonth(dateCreatedMonth + 1);
            break;
    }
    
    console.log(dueDateUnformatted)
    const dueDateObj = new Date(dueDateUnformatted);
    console.log(dueDateObj);
    const month = dueDateObj.getMonth() + 1;
    const day = dueDateObj.getDate();
    const year = dueDateObj.getFullYear();
    const dueDate = `${month}/${day}/${year}`
    console.log(dueDate);
    return dueDate;
}
