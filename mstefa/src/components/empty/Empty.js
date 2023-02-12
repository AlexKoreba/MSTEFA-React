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
 
export default Empty;