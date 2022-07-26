
// CUSTOM HOOK
import { useEffect, useState } from "react";
import axios from 'axios';

const useFetch = (url) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        // Artık gelen data = productData
        // yani productData değişkeni ile ulaşabiliriz
        try{
            const {data : responseData} = await axios.get(url);
            setData(responseData);
            setLoading(false);
            // console.log(productData);
        }catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
        //
    }, [])

    return {error, loading, data}
}

export default useFetch;