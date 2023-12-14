import { useEffect } from 'react';
import axios from 'axios';
import { setStories } from '../store/slices/pdf-draw-slice';
import { useDispatch } from 'react-redux'

const useStoryLoader = (id) => {
    const dispatch = useDispatch();
    // Handle Story Loading
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/v2/story/list/${id}`);
                dispatch(setStories(response.data.stories));
            } catch (err) {
                console.error("Failed to fetch stories for edition " + id);
            }
        };
        fetchData();
    }, [id, dispatch]);
    return {  }
}

export default useStoryLoader
