import PropTypes from 'prop-types';

//we use props name is"blog"
const Blog = ({ blog }) => {

    console.log(blog);

    return (
        <div>

        </div>
    );
};



Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;