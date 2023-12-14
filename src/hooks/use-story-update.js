import axios from "axios";
import { useKeycloakContext } from "../context/KeycloakContext"

const useStoryUpdate = () => {
    const { withToken } = useKeycloakContext()
    // Handle Update Story Selections
    const updateHandler = async (data, id) => {
        try {
            const api = axios.create({ timeout: 0 });
            const response = await api.put(`${process.env.REACT_APP_BACKEND_URL}/v2/story/selections/update/${id}`, data, {
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

            const deltaResponse = await api.put(`${process.env.REACT_APP_BACKEND_URL}/v2/story/content/update/${id}`, jsonData, {
                headers: withToken({
                    "Content-Type": "application/json"
                })
            })

            if (response.status === 200 && deltaResponse.status === 200) {
                return response
            }

        } catch (error) {
            console.error("Error fetching stories for ID:", id);
            throw error;
        }
    }

    return { updateHandler }
}

export default useStoryUpdate