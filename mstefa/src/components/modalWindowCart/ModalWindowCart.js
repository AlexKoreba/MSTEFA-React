import PropTypes from "prop-types";
import { modalEvents } from "./../../helpers/events";

import success from "./success.png";
import fail from "./fail.png";

import "./ModalWindowCart.css";

const ModalWindowCart = ({workMode, total}) => {

    return ( 
        <>
            {
                workMode !==0 &&
                <div className="modal-wrapper">
                    <div className="modal">
                        <div className="modal-body">
                            {
                                workMode === 1 
                                ? 
                                <>
                                    <img src={fail} alt="Fail icon" />
                                    <p>Your order not placed :(</p>
                                    <p>Incorrect amount of products!</p>
                                </> 
                                : 
                                workMode === 2
                                ?
                                <>
                                    <img src={success} alt="Success icon" />
                                    <p>Your order for the amount of <strong>{total.toFixed(2)}</strong> has been successfully placed!</p>
                                    <p>Thanks for choosing our company :)</p>
                                </>
                                : null
                            }
                        </div>
                        <div className="modal-footer">
                            <button className="btn-modal" onClick={() => modalEvents.emit("EClosedModalWindow")}>
                                confirm
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

ModalWindowCart.propTypes = {
    workMode: PropTypes.number.isRequired,
    total: PropTypes.number
};
 
export default ModalWindowCart;