import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Reader from '../components/Reader/Reader';
import axios from "axios"


const ReaderText = () => {
    const [content, setContent] = useState('');
    const location = useLocation();

    useEffect(() => {
        // Extracting storyID from the URL
        const pathParts = location.pathname.split("/");
        const storyID = pathParts[4];

        // todo change to axios was i wdrunik?

        const fetchStoryContent = async () => {
            try {
                const api = axios.create({ timeout: 0 });
                const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/v2/story/content/fetch/html/${storyID}`, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                setContent(response.data.html);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchStoryContent();
    }, [location.pathname]);

    return (<Reader content={content} />);
};

export default ReaderText;