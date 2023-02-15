import PropTypes from "prop-types";

import Empty from "./../../components/empty/Empty";
import ProductInLikes from "./../../components/productInLikes/ProductInLikes";

import "./Likes.css";


const Likes = ({products}) => {

    return ( 
        <main className="likes">
            <div className="container">
                <div className="likes-wrapper">
                    { 
                        products.length === 0 
                        ? <Empty title="your favorites list is empty" />
                        : <>
                            <h4 className="likes-title">you like this</h4>
                            <div className="likes-content">
                                <ul className="likes-content-heading">
                                    <li className="first-column">btn-remove</li>
                                    <li className="second-column">product image</li>
                                    <li className="third-column">product name</li>
                                    <li className="fourth-column">price</li>
                                    <li className="fifth-column">btn-add</li>
                                </ul>
                                <ul className="likes-list">
                                    <li>
                                        {
                                            products.map( product => <ProductInLikes key={product.id} product={product} /> )
                                        }
                                    </li>
                                </ul>
                            </div>
                        </>
                    }
                </div>
            </div>
        </main>
    );
}
 
Likes.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
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
    )
};

export default Likes;