import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTeachersFromServer, postTeacherToServer, updateTeacherInServer, deleteTeacherFromServer } from "src/services";

export const fetchTeachersAsync = createAsyncThunk("teachers/fetchTeachersAsync", async () => {
    const teachers = await getTeachersFromServer();
    return teachers;
});

export const addTeacherAsync = createAsyncThunk("teachers/addTeacherAsync", async (teacherData) => {
    const teacher = await postTeacherToServer(teacherData);
    return teacher;
});

export const editTeacherAsync = createAsyncThunk("teachers/editTeacherAsync", async ({ teacherId, editedFields }) => {
    const teacher = await updateTeacherInServer(teacherId, editedFields);
    return teacher;
});

export const removeTeacherAsync = createAsyncThunk("teachers/removeStudentAsync", async (teacherId) => {
    await deleteTeacherFromServer(teacherId);
    return teacherId;
});

const initialState = {
    teachers: [],
    status: "idle",
    error: null
};

const teacherSlice = createSlice({
    name: "teacher",
    initialState,
    extraReducers: {
        [fetchTeachersAsync.pending]: (state) => {
            state.status = "loading";
        },
        [fetchTeachersAsync.fulfilled]: (state, action) => {
            state.status = "success";
            state.teachers = action.payload;
        },
        [fetchTeachersAsync.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.error.message;
        },
        [addTeacherAsync.pending]: (state) => {
            state.status = "loading";
        },
        [addTeacherAsync.fulfilled]: (state, action) => {
            state.status = "success";
            state.teachers.push(action.payload);
        },
        [addTeacherAsync.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.error.message;
        },
        [editTeacherAsync.pending]: (state) => {
            state.status = "loading";
        },
        [editTeacherAsync.fulfilled]: (state, action) => {
            state.status = "success";
            const index = state.teachers.findIndex(teacher => teacher._id === action.payload._id);
            if (index !== -1) {
                state.teachers[index] = action.payload;
            }
        },
        [editTeacherAsync.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.error.message;
        },
        [removeTeacherAsync.pending]: (state) => {
            state.status = "loading";
        },
        [removeTeacherAsync.fulfilled]: (state, action) => {
            state.status = "success";
            state.teachers = state.teachers.filter(teacher => teacher._id !== action.payload);
        },
        [removeTeacherAsync.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.error.message;
        },
    }
});

export const teachersReducer = teacherSlice.reducer;
