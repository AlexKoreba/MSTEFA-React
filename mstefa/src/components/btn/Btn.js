import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Btn.css";

const Btn = ({url, btnText}) => {
    return ( 
        <NavLink to={url ? url : "/"} className="btn">{btnText}</NavLink>
    );
}

Btn.propTypes = {
    url: PropTypes.string,
    btnText: PropTypes.string.isRequired
};
 
export default React.memo(Btn);