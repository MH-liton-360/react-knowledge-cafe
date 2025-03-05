import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleToBookmarks }) => {



    const [blogs, setBlogs] = useState([]); //Data store;

    //Data load callback function and data load korar system "fetch"
    useEffect(() => {
        fetch('blogs.json')
            .then((res) => res.json())
            .then((data) => setBlogs(data))   //jkhni load hbe thkn state kore dite hbe;

    }, [])

    return (
        <div className="w-2/3">
            <h2 className="text-4xl">Blogs: {blogs.length} </h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleToBookmarks={handleToBookmarks}></Blog>)
            }
        </div>
    );
};

Blogs.PropTypes = {
    handleToBookmarks: PropTypes.func
}

export default Blogs;