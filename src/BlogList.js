import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        {/* <p>Id: {blog.id}</p> */}
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                    </Link>

                </div>
            ))}
        </div>
    );
}

export default BlogList;