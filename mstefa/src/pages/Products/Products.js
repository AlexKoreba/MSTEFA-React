import { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import ProductCard from "./../../components/productCard/ProductCard";

import "./Products.css";


const Products = ({products}) => {

    const [categories] = useState(Object.keys(products));

    return ( 
        <main className="products">
            <div className="container">
                <div className="products-wrapper">

                    <section className="products-type">
                        <h4 className="products-title">all products</h4>
                        {
                            categories.map( category => {
                                return (
                                    <Fragment key={category}>
                                        <NavLink to={`/products/${category}`}>
                                            <h3 className="products-subtitle">{category}</h3>
                                        </NavLink>
                                        <div className="products-list">
                                            {
                                               products[category].map( product => <ProductCard key={product.id} product={product} /> ) 
                                            }
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                    </section>
                    
                </div>
            </div>
        </main>
    );
}

Products.propTypes = {
    products: PropTypes.object
};
 
export default Products;