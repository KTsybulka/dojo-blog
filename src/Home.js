import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, setBlog] = useState(null);
    const [isPending, setIsPanding] = useState(true);

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
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            setBlog(data);
            setIsPanding(false);
        });
    }, 1000)   
    }, []);

    return (
        <div className="home">
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            
        </div>
    );
}

export default Home;