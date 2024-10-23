import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPanding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        setTimeout(() => {
                 fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch the data for that resourse')
            }
            // console.log(res);
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            setData(data);
            setIsPanding(false);
            setError(null);
        })
        .catch(err => {
            // console.log(err.message);
            setIsPanding(false);
            setError(err.message);
        })
    }, 500)   
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;