import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log('blog deleted');
            navigate('/');
        }); // Fixed missing closing parenthesis here
    };

return (
    <div className="blog-details">
        {/* <h2>Blog details - { id }</h2> */}
        {isPending && <div> Loading ...</div>}
        {error && <div> {error} </div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body} </div>
                <button onClick={handleClick}>Delete</button>
            </article> 
            )}   
        </div>
);
}

export default BlogDetails;