import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateNewUpload } from "../store/slices/pdf-library";
import { useKeycloakContext } from "../context/KeycloakContext";

// React Hook to Manage File Uploads

const usePDFUploder = () => {

    ////   States & Redux    ////

    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState(false);
    const dispatch = useDispatch();
    const { withToken } = useKeycloakContext()


    ////    State Management    ////
    const selectFileHandler = (event) => {
        setFile(event.target.files[0])
        event.target.value = "";
    }

    const removeFileHandler = () => {
        setFile(null);
    }

    ////        File Upload Mangement         ////
    const postMediaFile = async (data) => {
        try {
            const api = axios.create({ timeout: 0 });
            const response = await api.post(`${process.env.REACT_APP_BACKEND_URL}/v2/edition/upload`, data, {
                headers: withToken({
                    "Content-Type": "multipart/form-data"
                })
            });

            return response.data;
        } catch (error) {
            console.error("Error uploading file:", error);
            throw error;
        }
    };

    const uploadHandler = async (event) => {
        if (!file) {
            setFeedback(true);
            setTimeout(() => setFeedback(false), 200);
            return;
        }
        setIsLoading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const data = await postMediaFile(formData);
        } catch (error) {
            console.error("Error in fileUploadHandler:", error);
        } finally {
            setFile(null);
            setIsLoading(false);
        }
        dispatch(updateNewUpload(true));
        return { redirect: "/" };
    };

    return {
        file,
        selectFileHandler,
        removeFileHandler,
        uploadHandler,
        isLoading,
        feedback
    }

}

export default usePDFUploder;
