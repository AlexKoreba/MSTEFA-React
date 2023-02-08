import { useContext } from "react";
import { ProductContext } from "./../../context/ProductContext";
import { productEvents } from "./../../helpers/events";
import "./Heart.css";
 
const Heart = () => {
    
    const {productID, isActive} = useContext(ProductContext);

    const classActiveHeart = "heart";
    const classNormalHeart = "heart heart-hidden";
    const changedActiveHeartStatus = () => productEvents.emit("EChangedHeartStatus", productID);

    return ( 
        <span className={isActive ? classActiveHeart : classNormalHeart} onClick={changedActiveHeartStatus}>
            <img 
                src={`./../../img/icons/${isActive ? "heart-full" : "heart-empty"}.svg`} 
                alt="Heart's icon" 
            />
        </span>
    );
}
 
export default Heart;