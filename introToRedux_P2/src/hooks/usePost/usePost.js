// Custom Hook
import { useState} from 'react';
import axios from 'axios';

const usePost = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const post = async (URL, apiData) => {
        try {
            setLoading(true);
            // console.log("API", apiData);
            const {data: responseData} = await axios.post(URL, apiData);
            // console.log(responseData);
            setData(responseData);
            setLoading(false);
        } catch(err) {
            setError(err);
            setLoading(false);
        }
    }

    return {data, loading, error, post};
}

export default usePost;