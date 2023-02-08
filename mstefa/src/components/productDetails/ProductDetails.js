import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import BtnAddToCart from "./../btnAddToCart/BtnAddToCart";
import "./ProductDetails.css";

const ProductDetails = ({product}) => {

    const productTypeTitle = 
    product.type.endsWith('ses') ? product.type.slice(0, -2) : 
    !product.type.endsWith('s') ? product.type :
    product.type.slice(0, -1); 

    return ( 
        <section className="info-content">

            <h6 className="product-category-link">
                <span>category / </span>
                <NavLink to={`/products/${product.type}`}>{product.type}</NavLink>
            </h6>
        
            <h5 className="product-title">{`${productTypeTitle[0].toUpperCase() + productTypeTitle.slice(1)} ${product.title}`}</h5>

            <span className="product-price">{product.price.toFixed(2)}</span>

            <div className="color-info">
                <span>color: </span>
                {
                    Object.entries(product.color).map( elem => {
                        return (
                            <div className="color-wrapper" key={elem[1].colorName}>
                                <span className="color-name">{elem[1].colorName}</span>
                                <div className="color-hex" style={{backgroundColor: `${elem[1].colorHEX}`}}></div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="product-btn">
                <BtnAddToCart isActive={product.isActiveCart} productID={product.id} />
                <p className="product-btn-note">production time is 10 business days*</p>
            </div>

            <div className="product-composition">
                <span>composition: </span>
                <div className="composition-wrapper">
                    {
                        Object.entries(product.composition).map( elem => 
                            <span key={elem[1].property}>{`${elem[1].property} - ${elem[1].value}`}</span> 
                        )
                    }
                </div>
            </div>

            {
                product.description &&  <div className="discription">
                                            <span>{product.description}</span>
                                        </div>
            }

            <div className="product-care">
                <details>
                    <ul>
                        <li>Wash on delicate cycle at 400 rpm.</li>
                        <li>Water temperature up to 30°C.</li>
                        <li>After washing, we recommend to pull the product a little in length. This way it will keep its shape.</li>
                        <li>Iron at iron temperature up to 110°C.</li>
                        <li>Don't bleach.</li>
                        <li>Drying on a horizontal plane in a straightened state.</li>
                        <li>Tumble drying is prohibited.</li>
                    </ul>
                    <summary>product care</summary>
                </details>
            </div>
            <div className="product-delivery">
                <details>
                    <p>Delivery to all regions.</p>
                    <summary>delivery</summary>
                </details>
            </div>
        </section>
    );
}

ProductDetails.propTypes = {
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

export default ProductDetails;