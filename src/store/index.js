import { configureStore } from "@reduxjs/toolkit";
import { studentsReducer, classReducer, teachersReducer } from "features";

export default configureStore({
    reducer: {
        students: studentsReducer,
        class: classReducer,
        teachers: teachersReducer
    }
});