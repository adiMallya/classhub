import axios from "axios";
import { BASE_URL } from "src/utils/constant";

const getStudentsFromServer = async () => {
    const response = await axios.get(`${BASE_URL}/students`);
    if (response.data.success) {
        return response.data.data;
    } else {
        throw new Error(response.data.error);
    }
}

const postStudentToServer = async (studentData) => {
    const response = await axios.post(`${BASE_URL}/students`, { ...studentData });
    if (!response.data.success) {
        return response.data.data;
    } else {
        throw new Error(response.data.error);
    }
}

const updateStudentInServer = async (studentId, fieldsToUpdate) => {
    const response = await axios.post(`${BASE_URL}/students/${studentId}`, { ...fieldsToUpdate });
    if (response.data.success) {
        return response.data.data;
    } else {
        throw new Error(response.data.error);
    }
}

const deleteStudentFromServer = async (studentId) => {
    const response = await axios.delete(`${BASE_URL}/students/${studentId}`);
    if (response.status !== 204) {
        throw new Error(response.data.error);
    }
}

export { getStudentsFromServer, postStudentToServer, updateStudentInServer, deleteStudentFromServer };