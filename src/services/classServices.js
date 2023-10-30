import axios from "axios";
import { BASE_URL } from "src/utils";
import toast from "react-hot-toast";

const getClassesFromServer = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/class`);
        if (response.data.success) {
            return response.data.data;
        }
    } catch (error) {
        toast.error("Failed to fetch data.");

    }
}

const getMembersFromClass = async (classId, type) => {
    try {
        const response = await axios.get(`${BASE_URL}/class/${classId}/members?type=${type}`);
        if (response.data.success) {
            return response.data.data;
        }
    } catch ({ response }) {
        toast.error(response.data.error);
    }
}

export { getClassesFromServer, getMembersFromClass };