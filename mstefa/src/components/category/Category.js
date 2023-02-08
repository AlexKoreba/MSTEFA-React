import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Category.css";

const Category = ({category, workmode}) => {

    const classActiveLink = "categories-link active-category";
    const classNormalLink = "categories-link";

    return ( 
            <li>
                <NavLink 
                    to={`/products/${category}`} 
                    className={
                        workmode === "forMenu" ? 
                            "nav-menu-link" : 
                        workmode === "forPage" ? 
                            ({isActive}) => isActive ? classActiveLink : classNormalLink
                        : null
                    }>
                    {category[0].toUpperCase() + category.slice(1)}
                </NavLink>
            </li>
    );
}

Category.propTypes = {
    category: PropTypes.string.isRequired,
    workmode: PropTypes.string.isRequired  /* "forMenu" or "forPage"*/ 
};
 
export default React.memo(Category);