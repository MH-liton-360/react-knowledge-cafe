import PropTypes from 'prop-types';

const Blog = ({ blog = {} }) => {
    const { title } = blog;
    return (
        <div>
            <h2 className="text-3xl">{title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};

Blog.defaultProps = {
    blog: {}
};
export default Blog;
