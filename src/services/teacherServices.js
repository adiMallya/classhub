import axios from "axios";
import { BASE_URL } from "src/utils";
import toast from "react-hot-toast";

const getTeachersFromServer = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/teachers`);
        if (response.data.success) {
            return response.data.data;
        }
    } catch (error) {
        toast.error("Failed to fetch data.");

    }
}

const postTeacherToServer = async (teacherData) => {
    try {
        const response = await axios.post(`${BASE_URL}/teachers`, teacherData);
        if (response.data.success) {
            return response.data.data;
        }
    } catch ({ response }) {
        toast.error(response.data.error);
    }
}

const updateTeacherInServer = async (teacherId, fieldsToUpdate) => {
    try {
        const response = await axios.post(`${BASE_URL}/teachers/${teacherId}`, { ...fieldsToUpdate });
        if (response.data.success) {
            return response.data.data;
        }
    } catch ({ response }) {
        toast.error(response.data.error);
    }
}

const deleteTeacherFromServer = async (teacherId) => {
    try {
        await axios.delete(`${BASE_URL}/teachers/${teacherId}`);
    } catch ({ response }) {
        toast.error(response.data.error);
    }
}

export { getTeachersFromServer, postTeacherToServer, updateTeacherInServer, deleteTeacherFromServer };