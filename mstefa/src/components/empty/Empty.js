import PropTypes from "prop-types";

import img from "./leaf.svg";
import "./Empty.css";

const Empty = ({title}) => {
    return ( 
        <div className="empty">
            <img src={img} alt="Empty icon" />
            <p>{title}</p>
         </div>
    );
}

Empty.propTypes = {
    title: PropTypes.string.isRequired
};
 
export default Empty;