import axios from "axios";
import { BASE_URL } from "src/utils";
import toast from "react-hot-toast";

const getTeachersFromServer = async () => {
    const response = await axios.get(`${BASE_URL}/teachers`);
    if (response.data.success) {
        return response.data.data;
    } else {
        toast.error("Failed to fetch data.");
        throw new Error(response.data.error);
    }
}

const postTeacherToServer = async (teacherData) => {
    const response = await axios.post(`${BASE_URL}/teachers`, teacherData);
    if (response.data.success) {
        return response.data.data;
    } else {
        toast.error("Failed to add teacher. Check your inputs.");
        throw new Error(response.data.error);
    }
}

const updateTeacherInServer = async (teacherId, fieldsToUpdate) => {
    const response = await axios.post(`${BASE_URL}/teachers/${teacherId}`, { ...fieldsToUpdate });
    if (response.data.success) {
        return response.data.data;
    } else {
        toast.error("Failed to update teacher. Check your inputs.");
        throw new Error(response.data.error);
    }
}

const deleteTeacherFromServer = async (teacherId) => {
    const response = await axios.delete(`${BASE_URL}/teachers/${teacherId}`);
    if (response.status !== 204) {
        toast.error("Teacher does not exist.");
        throw new Error(response.data.error);
    }
}

export { getTeachersFromServer, postTeacherToServer, updateTeacherInServer, deleteTeacherFromServer };