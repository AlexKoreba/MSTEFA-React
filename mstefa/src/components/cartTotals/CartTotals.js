import PropTypes from "prop-types";
import BtnOrder from "./../btnOrder/BtnOrder";
import "./CartTotals.css";

const CartTotals = ({total, isCorrectValues}) => {

    return ( 
        <>
            <div className="cart-totals">
                <h5 className="cart-totals-title">cart totals</h5>
                <div className="cart-subtotal">
                    <span>subtotal</span>
                    <span className="cart-subtotal-value">{total.toFixed(2)}</span>
                </div>
                <div className="cart-total">
                    <span>total</span>
                    <span className="cart-total-value">{total.toFixed(2)}</span>
                </div>
                <BtnOrder total={total} isCorrectValues={isCorrectValues} />
            </div>
        </>
    );
}

CartTotals.propTypes = {
    total: PropTypes.number.isRequired,
    isCorrectValues: PropTypes.bool.isRequired
};
 
export default CartTotals;