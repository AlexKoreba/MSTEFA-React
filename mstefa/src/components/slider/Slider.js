import { useState, useEffect, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Btn from "./../btn/Btn";

import arrow from "./img/arrow.svg";
import "./Slider.css";


const Slider = () => {

    const slider = useRef(null);

    const [workMode, setWorkMode] = useState(1);
    const [sliderBottom, setSliderBottom] = useState(0);

    useEffect( () => {
        if (slider.current) {
            let bottom = slider.current.getBoundingClientRect().top + window.pageYOffset + slider.current.offsetHeight;
            setSliderBottom(bottom);
        }
    },[slider])

    useEffect( () => {
        AOS.init();
    },[])

    const switchNext = () => setWorkMode( currentValue => currentValue === 3 ? 1 : currentValue + 1 );
    const switchPrev = () => setWorkMode( currentValue => currentValue === 1 ? 3 : currentValue - 1 );

    const slideCode = 
                        <>
                            {
                                workMode === 1 
                                ? 
                                <div className="slide-content" data-aos="fade-down-right" data-aos-duration="1000">
                                    <h1 className="slide-heading">MSTEFA brand</h1>
                                    <p className="slide-subtitle">Belarusian women's clothing brand made from natural fabrics with an emphasis on color</p>
                                    <Btn url="/contacts" btnText="learn more" />
                                </div>
                                : 
                                workMode === 2
                                ?
                                <>
                                    <span data-aos="zoom-in-right" data-aos-duration="1000">
                                        <p className="slide-title">Choose your look for today</p>
                                    </span>
                                    <span onClick={ () => window.scrollTo(0, sliderBottom) }>
                                        <Btn btnText="start buying" />
                                    </span>
                                </>
                                :
                                workMode === 3
                                ?
                                <>
                                    <p className="slide-title" data-aos="zoom-out-up" data-aos-duration="1000">Love and care in each of our products</p>
                                    <Btn url="/useful" btnText="useful info" />
                                </>
                                : null
                            }
                        </>;


    return ( 
        <div className="slider" ref={slider}>

            <div id="slider">
                <div className="slide" id={`slide-${workMode}`}>
                    <img src={`slide_${workMode}`} alt={`Slide ${workMode}`} />
                    {slideCode}
                </div>
            </div>

            <div className="controls">
                <img id="btnPrev" src={arrow} alt="Arrow's icon" onClick={switchPrev} />
                <img id="btnNext" src={arrow} alt="Arrow's icon" onClick={switchNext} />
            </div>

        </div> 
    )
}
 
export default Slider;