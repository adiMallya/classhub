import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getClassesFromServer, getMembersFromClass } from "src/services";

export const fetchClassesAsync = createAsyncThunk('classes/fetchClassesAsync', async () => {
    const classes = await getClassesFromServer();
    return classes;
});

export const fetchClassMembersAsync = createAsyncThunk('classes/fetchClassMembersAsync', async ({ classId, memberType }) => {
    const members = await getMembersFromClass(classId, memberType);
    return members;
});

const initialState = {
    classes: [],
    status: "idle",
    error: null
};

const classSlice = createSlice({
    name: "class",
    initialState,
    extraReducers: {
        [fetchClassesAsync.pending]: (state) => {
            state.status = "loading";
        },
        [fetchClassesAsync.fulfilled]: (state, action) => {
            state.status = "success";
            state.classes = action.payload;
        },
        [fetchClassesAsync.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.error.message;
        },
        [fetchClassMembersAsync.pending]: (state) => {
            state.status = "loading";
        },
        [fetchClassMembersAsync.fulfilled]: (state, action) => {
            state.status = "success";

        },
        [fetchClassMembersAsync.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.error.message;
        }
    }
});

export const classReducer = classSlice.reducer;
