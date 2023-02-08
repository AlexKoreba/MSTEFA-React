import "./Counter.css";

const Counter = ({value}) => value !== 0 && <span className="counter">{value}</span>
 
export default Counter;