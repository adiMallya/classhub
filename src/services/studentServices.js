import axios from "axios";
import { BASE_URL } from "src/utils";
import toast from "react-hot-toast";

const getStudentsFromServer = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/students`);
        if (response.data.success) {
            return response.data.data;
        }
    } catch (error) {
        toast.error("Failed to fetch data.");
    }
}

const postStudentToServer = async (studentData) => {
    try {
        const response = await axios.post(`${BASE_URL}/students`, { ...studentData });
        if (response.data.success) {
            return response.data.data;
        }
    } catch ({ response }) {
        toast.error(response.data.error);
    }
}

const updateStudentInServer = async (studentId, fieldsToUpdate) => {
    try {
        const response = await axios.post(`${BASE_URL}/students/${studentId}`, { ...fieldsToUpdate });
        if (response.data.success) {
            return response.data.data;
        }
    } catch ({ response }) {
        toast.error(response.data.error);
    }
}

const deleteStudentFromServer = async (studentId) => {
    try {
        await axios.delete(`${BASE_URL}/students/${studentId}`);
    } catch ({ response }) {
        toast.error(response.data.error);
    }
}

export { getStudentsFromServer, postStudentToServer, updateStudentInServer, deleteStudentFromServer };