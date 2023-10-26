import axios from "axios";
import { BASE_URL } from "src/utils";

const getClassesFromServer = async () => {
    const response = await axios.get(`${BASE_URL}/class`);
    if (response.data.success) {
        return response.data.data;
    } else {
        throw new Error(response.data.error);
    }
}

const getMembersFromClass = async (classId, type) => {
    const response = await axios.get(`${BASE_URL}/class/${classId}/members`, { params: type });
    if (response.data.success) {
        return response.data.data;
    } else {
        throw new Error(response.data.error);
    }
}

export { getClassesFromServer, getMembersFromClass };