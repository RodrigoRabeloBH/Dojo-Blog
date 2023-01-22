import { useEffect, useState } from "react";
import { url } from "./constant";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Update = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setPending] = useState(false);
    const history = useHistory();

    useEffect(() => {
        fetch(url + '/' + id)
            .then(res => { return res.json() })
            .then(blog => {
                setAuthor(blog.author);
                setTitle(blog.title);
                setBody(blog.body);
            })
            .catch(err => console.log(err))
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, author, body };
        setPending(true);

        setTimeout(() => {
            fetch(url + '/' + id, {
                method: 'PUT',
                headers: { 'Content-Type': 'Application/json' },
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('Blog updated');
                setPending(false);
                history.push('/');
            }).catch(err => console.log(err.message));
        }, 500);
    }

    return (
        <div className="create">
            <h2>Update a Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Blog title:</label>
                <input
                    type="text"
                    required
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="body">Blog body:</label>
                <textarea
                    required
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}></textarea>
                <label htmlFor="author">Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Update blog</button>}
                {isPending && <button disabled>Updating  Blog ...</button>}
            </form>
        </div>
    );
}

export default Update;