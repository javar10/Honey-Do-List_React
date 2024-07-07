import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './features/new_tasks/newTaskSlice';


export const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
});

