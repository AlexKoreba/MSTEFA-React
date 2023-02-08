import { useParams } from "react-router-dom";

// import products from "../../helpers/productsList.json";
import { ProductContext } from "./../../context/ProductContext";

import PhotoContentSlider from "./../../components/photoContentSlider/PhotoContentSlider";
import ProductDetails from "./../../components/productDetails/ProductDetails";

import "./Product.css";


const Product = ({products}) => {
    const {type, title} = useParams();
    const product = products[type].find(product => product.title.split(" ").join("-") === title);

    return ( 
        <main className="product">
            <div className="container">
                <div className="product-wrapper">

                    <ProductContext.Provider value={{productID: product.id, isActive: product.isActiveHeart}}>
                        <PhotoContentSlider type={product.type} title={product.title} />
                    </ProductContext.Provider>

                    <ProductDetails product={product} />

                </div>
            </div>
        </main>
    );
}
 
export default Product;