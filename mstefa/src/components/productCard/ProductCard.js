import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { ProductContext } from "./../../context/ProductContext";

import Heart from "./../heart/Heart";
import "./ProductCard.css";

const ProductCard = ({product}) => {

    const productTypeTitle = 
    product.type.endsWith('ses') ? product.type.slice(0, -2) : 
    !product.type.endsWith('s') ? product.type :
    product.type.slice(0, -1);

    return ( 
        <div className="product-card">

            <NavLink to={`/products/${product.type}/${product.title.split(" ").join("-")}`} className="product-card-link">
                <span className="product-img">
                    <img src={`./../../img/products/${product.type}/${product.title.split(" ").join("-")}/01.jpg`} alt={product.type} />
                </span>
                <span className="product-card-footer">
                    <span className="product-card-title">{`${productTypeTitle[0].toUpperCase() + productTypeTitle.slice(1)} ${product.title}`}</span>
                    <span className="product-card-price">{product.price.toFixed(2)}</span>
                </span>
            </NavLink>

            <ProductContext.Provider value={{productID: product.id, isActive: product.isActiveHeart}}>
                <Heart />
            </ProductContext.Provider>

        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired, 
        title: PropTypes.string.isRequired, 
        price: PropTypes.number.isRequired, 
        color: PropTypes.arrayOf(
            PropTypes.shape({
                colorName: PropTypes.string.isRequired,
                colorHEX: PropTypes.string.isRequired
            })
        ),
        composition: PropTypes.arrayOf(
            PropTypes.shape({
                property: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired
            })
        ),
        description: PropTypes.string,
        isActiveHeart: PropTypes.bool.isRequired,
        isActiveCart: PropTypes.bool.isRequired
    })
};
 
export default ProductCard;