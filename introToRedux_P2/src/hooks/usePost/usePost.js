// Custom Hook
import { useState} from 'react';
import axios from 'axios';

const usePost = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    const post = async (URL, apiData) => {
        try {
            setLoading(true);
            const {data: responseData} = await axios.POST(URL, apiData);
            setData(responseData);
            setLoading(false);
        } catch(err) {
            setError(err.message);
            setLoading(false);
        }
    }

    return {error, loading, data, post};
}

export default usePost;