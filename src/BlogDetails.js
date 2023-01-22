import { Link, useParams } from "react-router-dom";
import { url } from "./constant";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch(url + '/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch(url + '/' + blog.id, { method: 'DELETE' })
            .then(() => {
                history.push('/');
            })
            .catch(err => console.log(err.message));
    }

    return (
        <div className="blog-details">

            {isPending && <p>Loading ...</p>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p> Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={() => history.push(`/update/${blog.id}`)}>Update</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;