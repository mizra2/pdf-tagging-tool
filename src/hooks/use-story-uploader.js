import axios from "axios"
import { useKeycloakContext  } from "../context/KeycloakContext";

const useStoryUploader = () => {
    const { withToken } = useKeycloakContext();
    // Handle Story Uploads 
    const uploadHandler = async (data, id) => {
        try {
            const api = axios.create({ timeout: 0 });
            const response = await api.post(`${process.env.REACT_APP_BACKEND_URL}/v2/story/add/${id}`, data, {
                headers: withToken({
                    "Content-Type": "application/json"
                })
            });

            const test = response.data.paragraphs.join("\n\n");

            const delta = {
                ops: [
                    {
                        insert: test
                    }
                ]
            }

            const jsonData = JSON.stringify({
                delta: delta,
                html: "",
                text: ""
            })

            const deltaResponse = await api.put(`${process.env.REACT_APP_BACKEND_URL}/v2/story/content/update/${response.data.id}`, jsonData, {
                headers: withToken({
                    "Content-Type": "application/json"
                })
            })

            if(response.status === 200 && deltaResponse.status === 200) {
                return response.data;
            }

        } catch (error) {
            console.error("Error fetching stories for ID:", id);
            throw error;
        }
    }
    return { uploadHandler }

}

export default useStoryUploader