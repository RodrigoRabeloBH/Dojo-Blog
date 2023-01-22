import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { url } from "./constant";

const Home = () => {
    const { data, isPending, error } = useFetch(url);
    return (
        <div className="home">
            {error && <p> {error}</p>}
            {isPending && <p>Loading ...</p>}
            {data && <BlogList blogs={data} title='All blogs!' />}
        </div>
    );
}

export default Home;
