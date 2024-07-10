import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './features/new_tasks/newTaskSlice';
import { usersReducers } from './features/users/usersSlice';


export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        users: usersReducers
    }
});

