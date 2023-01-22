import { useState } from "react";
import { url } from "./constant";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario')
    const [isPending, setPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, author, body };

        setPending(true);

        setTimeout(() => {
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'Application/json' },
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('New blog added');
                setPending(false);
                history.push('/');
            }).catch(err => console.log(err.message));
        }, 500);
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
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
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding  Blog ...</button>}
            </form>
        </div>
    );
}

export default Create;
