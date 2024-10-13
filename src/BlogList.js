

const BlogList = ({ blg, ttl, handleDelete}) => {
    // const blogs = props.blg;
    // const title = props.ttl;


    return (
        <div className="blog-list">

            <h1>{ttl}</h1>

            {blg.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <p>Id: {blog.id}</p>
                    <h2>{blog.title}</h2>
                    <p>Writen by:  {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;