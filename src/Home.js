import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, stateBlog] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('Mario');
    
    const handleDelete = (id) => {
        const newBlog = blogs.filter(g => g.id !== id)
        stateBlog(newBlog)
    }

    useEffect(() =>{
        console.log('useEffect run')
        console.log(name)
    }, [name]);

    return (
        <div className="home">

            <BlogList blg={blogs} ttl="All Blogs" handleDelete={handleDelete}/>

            <button onClick={()=> setName('luigy')}>Change name</button>
            <p>{name}</p>

            <BlogList blg={blogs.filter((g) => g.author === "mario")} ttl="Mario's blogs" />

        </div>
    );
}

export default Home;