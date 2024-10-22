import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, setBlog] = useState(null);
    const [isPending, setIsPanding] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() =>{
    //     fetch('http://localhost:8000/blogs')
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then((data) => {
    //         // console.log(data);
    //         setBlog(data);
    //         setIsPanding(false);
    //     })
    // }, []);

    // just puase exsample
    useEffect(() =>{
        setTimeout(() => {
                 fetch('http://localhost:8000/blogs')
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch the data for that resourse')
            }
            // console.log(res);
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            setBlog(data);
            setIsPanding(false);
            setError(null);
        })
        .catch(err => {
            // console.log(err.message);
            setIsPanding(false);
            setError(err.message);
        })
    }, 500)   
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}

            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            
        </div>
    );
}

export default Home;