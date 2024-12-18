import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPanding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
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
                    if (err.name === 'AbortError') {
                        console.log("fetch aborted");
                    } else {
                        setIsPanding(false);
                        setError(err.message);
                    }


                })
        }, 500)
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;