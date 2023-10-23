import { configureStore } from "@reduxjs/toolkit";
import { studentsReducer } from "features";

export default configureStore({
    reducer: {
        students: studentsReducer
    }
});