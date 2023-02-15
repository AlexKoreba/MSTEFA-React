import React from "react";
import PropTypes from "prop-types";

import { productEvents } from "./../../helpers/events";
import "./BtnDelete.css";

const BtnDelete = ({workMode, productID}) => {

    const activateDeletingFromCart = () => productEvents.emit("EActiveDeleteFromCart", productID);
    const activateDeletingFromLikes = () => productEvents.emit("EActiveDeleteFromLikes", productID);

    return ( 
        <button 
            className="btn-delete" 
            onClick={ 
                workMode === "cart"
                ? activateDeletingFromCart
                : 
                workMode === "likes"
                ? activateDeletingFromLikes
                : null
            }>
            <span className="close"></span>
            <span className="close"></span>
        </button>
    );
}

BtnDelete.propTypes = {
    workMode: PropTypes.string.isRequired,
    productID: PropTypes.number.isRequired
};
 
export default React.memo(BtnDelete);