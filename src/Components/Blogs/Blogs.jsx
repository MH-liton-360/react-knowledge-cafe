import { useEffect, useState } from "react";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]); //Data store;

    //Data load callback function and data load korar system "fetch"
    useEffect(() => {
        fetch('blogs.json')
            .then((res) => res.json())
            .then((data) => setBlogs(data))   //jkhni load hbe thkn state kore dite hbe;

    }, [])

    return (
        <div>

        </div>
    );
};

export default Blogs;