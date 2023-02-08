import PropTypes from "prop-types";
import { productEvents } from "./../../helpers/events";
import "./BtnAddToCart.css";

const BtnAddToCart = ({isActive, productID}) => {

    const classActiveBtn = "add-to-cart add-to-cart-active";
    const classNormalBtn = "add-to-cart";
    const activateAddingToCart = () => productEvents.emit("EActiveAddToCart", productID);

    return ( 
        <>
            {
                isActive 
                ? <button className={classActiveBtn} disabled>add to cart</button>
                : <button className={classNormalBtn} onClick={activateAddingToCart}>add to cart</button>
            }
        </>
    );
}

BtnAddToCart.propTypes = {
    isActive: PropTypes.bool.isRequired,
    productID: PropTypes.number.isRequired
};
 
export default BtnAddToCart;