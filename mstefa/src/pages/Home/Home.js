import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "./../../components/slider/Slider";
import CollectionCard from "./../../components/collectionCard/CollectionCard";
import Sale from "./../../components/sale/Sale";
import "./Home.css";

const Home = () => {

    useEffect( () => {
        AOS.init();
    },[])

    return ( 
        <>
            <Slider />

            <main className="main">
                <div className="container">

                    <section className="collection" id="collection">
                        <h2 className="collection-title">
                            collection
                        </h2>
                        <div className="collection-cards">

                            <span data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2500">
                                <CollectionCard category="dresses" />   
                            </span>
                            <span data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2500">
                                <CollectionCard category="new" />
                            </span>
                            <span data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2500">
                                <CollectionCard category="sweaters" />
                            </span>
                            <span data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2500">
                                <CollectionCard category="bodysuits" />
                            </span>

                        </div>
                    </section>
                </div>

                <Sale />

            </main>
        </>
    );
}
 
export default Home;