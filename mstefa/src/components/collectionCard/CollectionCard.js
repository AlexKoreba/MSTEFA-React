import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./CollectionCard.css";

const CollectionCard = ({category}) => {
    return ( 
        <div className="collection-card">
            <NavLink to={`/products/${category}`} className="collection-card-content">
                <img className="collection-card-img" src={`./img/collection/${category}.jpg`} alt={`Collection of ${category}.jpg`} />
                <span className="collection-card-title">{category}</span>
            </NavLink>
        </div>
    );
}

CollectionCard.propTypes = {
    category: PropTypes.string.isRequired
};
 
export default CollectionCard