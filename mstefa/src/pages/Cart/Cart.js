import { useState, useEffect, useMemo } from "react";
import Empty from "./../../components/empty/Empty";
import ProductInCart from "./../../components/productInCart/ProductInCart";
import CartTotals from "./../../components/cartTotals/CartTotals";

import { cartEvents } from "./../../helpers/events";
import "./Cart.css";

const Cart = ({products}) => {

    const newObj = useMemo( () => {
        const obj = {};
        for (let product in products) {
            obj[products[product].id] = products[product].price;
        }
        return obj;
    }, [products]);


    const [productsSubtotal, setProductsSubtotalObj] = useState(newObj)
    const [total, setTotal] = useState(Object.values(productsSubtotal).reduce( (sum, subtotal) => sum += subtotal, 0 ));
    const [notZeroValue, setNotZeroValue] = useState(true);

    useEffect( () => {

        if ( Object.keys(newObj).length < Object.keys(productsSubtotal).length ) {
            const newProductsSubtotal = {...productsSubtotal};

            for (let key in productsSubtotal) {
                if ( !(key in newObj) ) {
                    delete newProductsSubtotal[key];
                }
            }

            setProductsSubtotalObj(newProductsSubtotal);
            setTotal( Object.values(newProductsSubtotal).reduce( (sum, subtotal) => sum += subtotal, 0 ) )
        }
    }, [newObj, productsSubtotal])

    useEffect( () => {

        const calcTotal = (productSubtotal, productID) => {
            let result;
            setProductsSubtotalObj( currentValue => {
                const newProductsSubtotalObj = {...currentValue};
                newProductsSubtotalObj[productID] = productSubtotal;
                result = Object.values(newProductsSubtotalObj).reduce( (sum, subtotal) => sum += subtotal, 0 );
                return newProductsSubtotalObj
            })
            setTotal(result);
        };

        if (Object.values(productsSubtotal).includes(0)) {
            setNotZeroValue(false);
        } else {
            setNotZeroValue(true);
        }

        cartEvents.addListener("EChangedProductSubtotal",calcTotal);

        return( () => {
            cartEvents.removeListener("EChangedProductSubtotal", calcTotal);
        })

    }, [productsSubtotal])

    return ( 
        <main className="cart">
            <div className="container">
                <div className="cart-wrapper">
                    {
                        products.length === 0 
                        ? <Empty title="your cart is empty" />
                        : <>
                            <h4 className="cart-title">cart</h4>
                            <div className="cart-content">
                                <ul className="cart-content-heading">
                                    <li className="first-column">product image</li>
                                    <li className="second-column">product</li>
                                    <li className="third-column">price</li>
                                    <li className="fourth-column">amount</li>
                                    <li className="fifth-column">subtotal</li>
                                    <li className="sixth-column">btn-remove</li>
                                </ul>
                                <ul className="cart-list">
                                    <li>
                                        {
                                            products.map( product => <ProductInCart key={product.id} product={product} /> )
                                        }
                                    </li>
                                </ul>
                            </div> 
                        </>
                    }

                    {
                        products.length !== 0 && <CartTotals total={total} isCorrectValues={notZeroValue} />
                    }

                </div>
            </div>
        </main>
    );
}
 
export default Cart;