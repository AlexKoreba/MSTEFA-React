import { useParams } from "react-router-dom";

// import products from "./../../helpers/productsList.json";

import Category from "../../components/category/Category";
import ProductCard from "./../../components/productCard/ProductCard";
import "./ProductCategory.css";

const ProductCategory = ({products}) => {

    const {type} = useParams();

    return ( 
        <main className="products">
            <div className="container">
                <div className="products-wrapper">

                    <aside className="products-categories">
                        <ul className="categories-list">
                            {
                                Object.keys(products).sort().map( category => <Category key={category} category={category} workmode="forPage" />)
                            }
                        </ul>
                    </aside>

                    <section className="products-type">
                        <h4 className="products-type-title">{type}</h4>
                        <div className="products-type-list">
                            {
                                products[type].map( product => <ProductCard key={product.id} product={product} /> )
                            }
                        </div>
                    </section>
                    
                </div>
            </div>
        </main>
    );
}
 
export default ProductCategory;