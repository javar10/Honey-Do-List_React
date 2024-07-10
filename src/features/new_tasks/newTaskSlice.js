import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasksArray: []
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,

    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: state.tasksArray.length + 1,
                ...action.payload
            };
            return {
                ...state,
                tasksArray:[...state.tasksArray, newTask]
            }
        },

       updateAssignment: (state, action) => {
            const updatedTask = {...action.payload};
            const updatedTasksArray = state.tasksArray.map(task =>
                task.id === action.payload.id ? updatedTask : task
            )
            return {
                ...state,
                tasksArray: updatedTasksArray
            }
        },

        updateAssignmentToMom: (state, action) => {
            console.log('updateAssignment action.type', action.type);
            console.log('updateAssignment action.payload', action.payload);
            console.log('updateAssignment state', JSON.stringify(state.tasksArray, null, 2));

            const updatedTasksArray = state.tasksArray.map(task => 
                task.id === action.payload.id ? {...task, assignment: 'Mom'} : task
            )

            return {
                ...state,
                tasksArray: updatedTasksArray
            }
        },

        updateAssignmentToNull: (state, action) => {
            console.log('updateAssignment action.type', action.type);
            console.log('updateAssignment action.payload', action.payload);
            console.log('updateAssignment state', JSON.stringify(state.tasksArray, null, 2));

            const updatedTasksArray = state.tasksArray.map(task => 
                task.id === action.payload.id ? {...task, assignment: null} : task
            )

            return {
                ...state,
                tasksArray: updatedTasksArray
            }
        }
    }
})

export const tasksReducer = tasksSlice.reducer;
export const { addTask, updateAssignment, updateAssignmentToMom, updateAssignmentToNull } = tasksSlice.actions;


export const displayTasks = (state) => {
    return state.tasks.tasksArray;
}

export const calcDueDate = (dateCreated, frequency) => {
    const dateCreatedDay = dateCreated.getDay();
    const dateCreatedMonth = dateCreated.getMonth();

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
    
    const dueDateObj = new Date(dueDateUnformatted);
    const month = dueDateObj.getMonth() + 1;
    const day = dueDateObj.getDate();
    const year = dueDateObj.getFullYear();
    const dueDate = `${month}/${day}/${year}`
    return dueDate;
}
