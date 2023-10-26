import axios from "axios";
import { BASE_URL } from "src/utils";
import toast from "react-hot-toast";

const getClassesFromServer = async () => {
    const response = await axios.get(`${BASE_URL}/class`);
    if (response.data.success) {
        return response.data.data;
    } else {
        toast.error("Failed to fetch data.");
        throw new Error(response.data.error);
    }
}

const getMembersFromClass = async (classId, type) => {
    const response = await axios.get(`${BASE_URL}/class/${classId}/members?type=${type}`);
    if (response.data.success) {
        return response.data.data;
    } else {
        toast.error("Class does not exist.");
        throw new Error(response.data.error);
    }
}

export { getClassesFromServer, getMembersFromClass };