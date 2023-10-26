import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getClassesFromServer, getMembersFromClass } from "src/services";

export const fetchClassesAsync = createAsyncThunk('classes/fetchClassesAsync', async () => {
    const classes = await getClassesFromServer();
    return classes;
});

export const fetchClassStudentsAsync = createAsyncThunk('classes/fetchClassStudentsAsync', async (classId) => {
    const members = await getMembersFromClass(classId, "students");
    return members;
});

const initialState = {
    classes: [],
    studentsOfClass: {},
    selectedClassId: null,
    genderFilter: 'all',
    sortKey: 'firstName',
    status: 'idle',
    error: null
};

const classSlice = createSlice({
    name: "class",
    initialState,
    reducers: {
        setSelectedClassId: (state, action) => {
            state.selectedClassId = action.payload;
        },
        setGenderFilter: (state, action) => {
            state.genderFilter = action.payload;
        },
        setSortKey: (state, action) => {
            state.sortKey = action.payload;
        }
    },
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
        [fetchClassStudentsAsync.pending]: (state) => {
            state.status = "loading";
        },
        [fetchClassStudentsAsync.fulfilled]: (state, action) => {
            state.status = "success";
            const classId = action.meta.arg;
            state.studentsOfClass[classId] = action.payload;
        },
        [fetchClassStudentsAsync.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.error.message;
        }
    }
});

export const { setSelectedClassId, setGenderFilter, setSortKey } = classSlice.actions;
export const classReducer = classSlice.reducer;
