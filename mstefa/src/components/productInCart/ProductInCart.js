import { useState, useEffect } from "react";

import { cartEvents } from "./../../helpers/events";
import BtnDelete from "./../btnDelete/BtnDelete";
import "./ProductInCart.css";

const ProductInCart = ({product}) => {

    const [amount, setAmount] = useState(1);
    const [subtotal, setSubtotal] = useState(product.price);

    const transferOfInfo = (productSubtotal, productID) => cartEvents.emit("EChangedProductSubtotal", productSubtotal, productID);

    useEffect( () => {
        setSubtotal(product.price * amount);
        transferOfInfo(product.price * amount, product.id);
    }, [amount, product.price, product.id]);

    const changeInputValue = event => {
        let value;

        if ( !isFinite(event.target.value) || event.target.value.includes(".") ) {
            value = 0;
        } else {
            value = +event.target.value
        }

        setAmount(value);
    };

    const productTypeTitle = 
    product.type.endsWith('ses') ? product.type.slice(0, -2) : 
    !product.type.endsWith('s') ? product.type :
    product.type.slice(0, -1);


    return ( 
        <ul className="cart-list-product">
            <li className="first-column">
                <img src={`./../../img/products/${product.type}/${product.title.split(" ").join("-")}/01.jpg`} alt={product.type} />
            </li>
            <li className="second-column">
                <span className="second-column-title">{`${productTypeTitle[0].toUpperCase() + productTypeTitle.slice(1)} ${product.title}`}</span>
                <span>{`color: ${product.color[0].colorName}`}</span>
            </li>
            <li className="third-column">{product.price.toFixed(2)}</li>
            <li className="fourth-column">
                <input 
                    className="input-amount" 
                    type="text" 
                    maxLength="2" 
                    value={amount} 
                    onChange={changeInputValue}
                />
            </li>
            <li className="fifth-column">
                {subtotal.toFixed(2)}
            </li>
            <li className="sixth-column">
                <BtnDelete workMode="cart" productID={product.id} />
            </li>
        </ul>
    );
}
 
export default ProductInCart;