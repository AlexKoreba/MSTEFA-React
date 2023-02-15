import BtnAddToCart from "./../btnAddToCart/BtnAddToCart";
import BtnDelete from "./../btnDelete/BtnDelete";

import "./ProductInLikes.css";

const ProductInLikes = ({product}) => {

    const productTypeTitle = 
    product.type.endsWith('ses') ? product.type.slice(0, -2) : 
    !product.type.endsWith('s') ? product.type :
    product.type.slice(0, -1); 

    return ( 
        <ul className="likes-list-product">
            <li className="first-column">
                <BtnDelete workMode="likes" productID={product.id} />
            </li>
            <li className="second-column">
                <img src={`./../../img/products/${product.type}/${product.title.split(" ").join("-")}/01.jpg`} alt={product.type} />
            </li>
            <li className="third-column">{`${productTypeTitle[0].toUpperCase() + productTypeTitle.slice(1)} ${product.title}`}</li>
            <li className="fourth-column">{product.price.toFixed(2)}</li>
            <li className="fifth-column">
                <BtnAddToCart isActive={product.isActiveCart} productID={product.id} />
            </li>
        </ul>
    );
}
 
export default ProductInLikes;