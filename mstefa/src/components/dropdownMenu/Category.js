import PropTypes from "prop-types";

const Category = ({category}) => {
    return <li><a className="nav-menu-link" href={`./${category}.html`}>{category[0].toUpperCase() + category.slice(1)}</a></li>;
};

Category.propTypes = {
    category: PropTypes.string.isRequired
};
 
export default Category;