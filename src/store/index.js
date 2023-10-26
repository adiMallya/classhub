import { configureStore } from "@reduxjs/toolkit";
import { studentsReducer, classReducer } from "features";

export default configureStore({
    reducer: {
        students: studentsReducer,
        class: classReducer
    }
});