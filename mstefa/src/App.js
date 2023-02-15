import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";

import { useLocalStorage } from "./utils/useLocalStorage";
import productsList from "./helpers/productsList.json";
import { productEvents, modalEvents } from "./helpers/events";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductCategory from "./pages/ProductCategory/ProductCategory";
import Product from "./pages/Product/Product";
import Likes from "./pages/Likes/Likes";
import Cart from "./pages/Cart/Cart";
import Contacts from './pages/Contacts/Contacts';
import Useful from './pages/Useful/Useful';

import ModalWindowCart from "./components/modalWindowCart/ModalWindowCart";
import './styles/main.css';

const storeName = "MSTEFA";


function App() {
    // LocalStorage
    const [products, setProducts] = useLocalStorage("products", productsList);
    const [likes, setLikes] = useLocalStorage("likes", []);
    const [cart, setCart] = useLocalStorage("cart", []);

    const [modalWorkMode, setModalWorkMode] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect( () => {

        const newProductsArr = [].concat(...Object.values(products));

        const changeHeartStatusInProduct = productID => {
            const newProduct = newProductsArr.find( product => product.id === productID);
            newProduct.isActiveHeart = !newProduct.isActiveHeart;

            // Добовляем (либо удаляем) в массив "likes" объект редактируемого товара в зависимости от текущего значения св-ва "isActiveHeart": 
            if (newProduct.isActiveHeart) {
                setLikes( currentValue => {
                    const newLikes = [...currentValue];
                    newLikes.push(newProduct);
                    return newLikes;
                });
            } else {
                setLikes( currentValue => currentValue.filter( product => product.id !== productID ));
            }

            // В массиве "cart" заменяем старое значение объекта редактируемого товара на новое (при наличии):
            if ( cart.findIndex( product => product.id === productID) !== -1 ) {
                setCart( currentValue => {
                    const newCart = [...currentValue];
                    const index = newCart.findIndex( product => product.id === productID);
                    newCart[index] = newProduct;
                    return newCart;
                });
            }

            // В объекте "products" заменяем старое значение объекта редактируемого товара на новое:
            setProducts( currentValue => {
                const newProducts = {...currentValue};
                const categoryArr = newProducts[newProduct.type];
                const index = categoryArr.findIndex( product => product.id === productID);
                categoryArr[index] = newProduct;
                return newProducts;
            });
        }; 

        const addToCart = productID => {
            const newProduct = newProductsArr.find( product => product.id === productID);
            newProduct.isActiveCart = true;

            // Добовляем в массив "cart" объект редактируемого товара: 
            setCart( currentValue => {
                const newCart = [...currentValue];
                newCart.push(newProduct);
                return newCart;
            });

            // В массиве "likes" заменяем старое значение объекта редактируемого товара на новое (при наличии):
            if ( likes.findIndex( product => product.id === productID) !== -1 ) {
                setLikes( currentValue => {
                    const newLikes = [...currentValue];
                    const index = newLikes.findIndex( product => product.id === productID);
                    newLikes[index] = newProduct;
                    return newLikes;
                });
            }

            // В объекте "products" заменяем старое значение объекта редактируемого товара на новое:
            setProducts( currentValue => {
                const newProducts = {...currentValue};
                const categoryArr = newProducts[newProduct.type];
                const index = categoryArr.findIndex( product => product.id === productID);
                categoryArr[index] = newProduct;
                return newProducts;
            });
        }

        const deleteFromCart = productID => {
            const newProduct = newProductsArr.find( product => product.id === productID);
            newProduct.isActiveCart = false;

            // Удаляем из массива "cart" объект редактируемого товара: 
            setCart( currentValue => currentValue.filter( product => product.id !== productID ));

            // В массиве "likes" заменяем старое значение объекта редактируемого товара на новое (при наличии):
            if ( likes.findIndex( product => product.id === productID) !== -1 ) {
                setLikes( currentValue => {
                    const newLikes = [...currentValue];
                    const index = newLikes.findIndex( product => product.id === productID);
                    newLikes[index] = newProduct;
                    return newLikes;
                });
            }

            // В объекте "products" заменяем старое значение объекта редактируемого товара на новое:
            setProducts( currentValue => {   
                const newProducts = {...currentValue};
                const categoryArr = newProducts[newProduct.type];
                const index = categoryArr.findIndex( product => product.id === productID);
                categoryArr[index] = newProduct;
                return newProducts;
            });
        }

        const deleteFromLikes = productID => {
            const newProduct = newProductsArr.find( product => product.id === productID);
            newProduct.isActiveHeart = false;

            // Удаляем из массива "likes" объект редактируемого товара: 
            setLikes( currentValue => currentValue.filter( product => product.id !== productID ));

            // В массиве "cart" заменяем старое значение объекта редактируемого товара на новое (при наличии):
            if ( cart.findIndex( product => product.id === productID) !== -1 ) {
                setCart( currentValue => {
                    const newCart = [...currentValue];
                    const index = newCart.findIndex( product => product.id === productID);
                    newCart[index] = newProduct;
                    return newCart;
                });
            }

            // В объекте "products" заменяем старое значение объекта редактируемого товара на новое:
            setProducts( currentValue => {   
                const newProducts = {...currentValue};
                const categoryArr = newProducts[newProduct.type];
                const index = categoryArr.findIndex( product => product.id === productID);
                categoryArr[index] = newProduct;
                return newProducts;
            });
        }

        const openModalWindowCart = (workMode, total) => {
            setModalWorkMode(workMode);
            setCartTotal(total);
        };

        const closeModalWindowCart = () => {

            if (modalWorkMode === 2) {

                // Очищаем массив "cart":
                setCart([]);

                // В массиве "likes" у всех объектов заменяем значение свойства "isActiveCart" на false:
                const newLikes = [...likes];

                for (let product of newLikes) {
                    product.isActiveCart = false;
                }

                setLikes(newLikes);

                // В объекте "products" у всех товаров заменяем значение свойства "isActiveCart" на false:
                const newProducts = {...products};

                for (let category in newProducts) {
                    for (let product of newProducts[category]) {
                        product.isActiveCart = false;
                    }
                }

                setProducts(newProducts);

                // Обнуляем стейт "cartTotal":
                setCartTotal(0);
            }

            setModalWorkMode(0);
        };

        productEvents.addListener("EChangedHeartStatus", changeHeartStatusInProduct);
        productEvents.addListener("EActiveAddToCart", addToCart);
        productEvents.addListener("EActiveDeleteFromCart", deleteFromCart);
        productEvents.addListener("EActiveDeleteFromLikes", deleteFromLikes);

        modalEvents.addListener("EOpenedModalWindow", openModalWindowCart);
        modalEvents.addListener("EClosedModalWindow", closeModalWindowCart);

        return () => {

            productEvents.removeListener("EChangedHeartStatus", changeHeartStatusInProduct);
            productEvents.removeListener("EActiveAddToCart", addToCart);
            productEvents.removeListener("EActiveDeleteFromCart", deleteFromCart);
            productEvents.removeListener("EActiveDeleteFromLikes", deleteFromLikes);

            modalEvents.removeListener("EOpenedModalWindow ", openModalWindowCart);
            modalEvents.removeListener("EClosedModalWindow", closeModalWindowCart);
        }

    }, [products, setProducts, likes, setLikes, cart, setCart, modalWorkMode])


    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Header storeName={storeName} likesAmount={likes.length} cartAmount={cart.length} />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/" element={<Products products={products} />} />
                    <Route path="/products/:type" element={<ProductCategory products={products} />} />
                    <Route path="/products/:type/:title" element={<Product products={products} />} />
                    <Route path="/likes" element={<Likes products={likes} />} />
                    <Route path="/cart" element={<Cart products={cart} />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/useful" element={<Useful />} />
                </Routes>

                <Footer storeName={storeName} />
                <ModalWindowCart workMode={modalWorkMode} total={cartTotal} />
            </Router>
        </div>
    );
}

export default App;