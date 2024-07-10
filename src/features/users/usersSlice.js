import { createSlice } from "@reduxjs/toolkit";
import { USERS } from '../../shared/USERS';

const initialState = {
    usersArray: USERS
};

const usersSlice = createSlice({
    name: 'users',
    initialState
});

export const usersReducers = usersSlice.reducer;

export const selectAllUsers = (state) => {
    console.log(state);
    return state.users.usersArray;
}


