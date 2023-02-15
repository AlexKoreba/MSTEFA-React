import Btn from "./../btn/Btn";

import sale from "./sale.jpg";
import "./Sale.css";

const Sale = () => {
    return ( 
        <div className="sale" id="sale">
            <img src={sale} alt="Sale" />
            <h3 className="sale-title">Sale</h3>
            <Btn url="/" btnText="learn more"/>
        </div>
    );
}
 
export default Sale;