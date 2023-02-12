import PropTypes from "prop-types";
import { modalEvents } from "./../../helpers/events";
import "./BtnOrder.css";

const BtnOrder = ({total, isCorrectValues}) => {

    const sendInfo = () => {
        if (!isCorrectValues) {
            modalEvents.emit("EOpenedModalWindow", 1);
        } else {
            modalEvents.emit("EOpenedModalWindow", 2, total);
        }
    };

    return ( 
        <button className="btn-order" onClick={sendInfo} >
            place an order
        </button>
    );
}

BtnOrder.propTypes = {
    total: PropTypes.number.isRequired,
    isCorrectValues: PropTypes.bool.isRequired
};
 
export default BtnOrder;