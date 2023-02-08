import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";

import { useLocalStorage } from "./utils/useLocalStorage";
import productsList from "./helpers/productsList.json";
import { productEvents } from "./helpers/events";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import ProductCategory from "./pages/ProductCategory/ProductCategory";
import Product from "./pages/Product/Product";
import Contacts from './pages/Contacts/Contacts';
import Useful from './pages/Useful/Useful';
// import Slider from './components/slider/Slider';

import './styles/main.css';

const storeName = "MSTEFA";


function App() {
    // LocalStorage
    const [products, setProducts] = useLocalStorage("products", productsList);
    const [likes, setLikes] = useLocalStorage("likes", []);
    const [cart, setCart] = useLocalStorage("cart", []);

    useEffect( () => {

        const changeHeartStatusInProduct = productID => {
            const newProductsArr = [].concat(...Object.values(products));
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

            // В массиве "products" заменяем старое значение объекта редактируемого товара на новое:
            setProducts( currentValue => {
                const newProducts = {...currentValue};
                const categoryArr = newProducts[newProduct.type];
                const index = categoryArr.findIndex( product => product.id === productID);
                categoryArr[index] = newProduct;
                return newProducts;
            });
        }; 

        const addToCart = productID => {
            const newProductsArr = [].concat(...Object.values(products));
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

            // В массиве "products" заменяем старое значение объекта редактируемого товара на новое:
            setProducts( currentValue => {
                const newProducts = {...currentValue};
                const categoryArr = newProducts[newProduct.type];
                const index = categoryArr.findIndex( product => product.id === productID);
                categoryArr[index] = newProduct;
                return newProducts;
            });
        }

        productEvents.addListener("EChangedHeartStatus", changeHeartStatusInProduct);
        productEvents.addListener("EActiveAddToCart", addToCart);
        return () => {
            productEvents.removeListener("EChangedHeartStatus", changeHeartStatusInProduct);
            productEvents.removeListener("EActiveAddToCart", addToCart);
        }

    }, [products, setProducts, likes, setLikes, cart, setCart])


    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Header storeName={storeName} likesAmount={likes.length} cartAmount={cart.length} />

                <Routes>
                    <Route path="/products/:type" element={<ProductCategory products={products} />} />
                    <Route path="/products/:type/:title" element={<Product products={products} />} />
                    {/* <Route path="/" element={<Slider />} /> */}
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/useful" element={<Useful />} />
                </Routes>

                <Footer storeName={storeName} />
            </Router>
        </div>
    );
}

export default App;
