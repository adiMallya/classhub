import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getStudentsFromServer, postStudentToServer, updateStudentInServer, deleteStudentFromServer } from "src/services";

export const fetchStudentsAsync = createAsyncThunk("students/fetchStudents", async () => {
    const students = await getStudentsFromServer();
    return students;
});

export const addStudentAsync = createAsyncThunk("students/addStudentAsync", async (studentData) => {
    const student = await postStudentToServer(studentData);
    return student;
});

export const editStudentAsync = createAsyncThunk("students/editStudentAsync", async ({ studentId, editedFields }) => {
    const student = await updateStudentInServer(studentId, editedFields);
    return student;
});

export const removeStudentAsync = createAsyncThunk("students/removeStudentAsync", async (studentId) => {
    await deleteStudentFromServer(studentId);
    return studentId;
});

// initialState
const initialState = {
    students: [],
    status: "idle",
    error: null
};

const studentSlice = createSlice({
    name: "student",
    initialState,
    extraReducers: {
        [fetchStudentsAsync.pending]: (state) => {
            state.status = "loading";
        },
        [fetchStudentsAsync.fulfilled]: (state, action) => {
            state.status = "success";
            state.students = action.payload;
        },
        [fetchStudentsAsync.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.error.message;
        },
        [addStudentAsync.pending]: (state) => {
            state.status = "loading";
        },
        [addStudentAsync.fulfilled]: (state, action) => {
            state.status = "success";
            state.students.push(action.payload);
        },
        [addStudentAsync.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.error.message;
        },
        [editStudentAsync.pending]: (state) => {
            state.status = "loading";
        },
        [editStudentAsync.fulfilled]: (state, action) => {
            state.status = "success";
            const index = state.students.findIndex(student => student._id === action.payload._id);
            if (index !== -1) {
                state.students[index] = action.payload;
            }
        },
        [editStudentAsync.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.error.message;
        },
        [removeStudentAsync.pending]: (state) => {
            state.status = "loading";
        },
        [removeStudentAsync.fulfilled]: (state, action) => {
            state.status = "success";
            state.students = state.students.filter(student => student._id !== action.payload);
        },
        [removeStudentAsync.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.error.message;
        },
    }
});

export const studentsReducer = studentSlice.reducer;
