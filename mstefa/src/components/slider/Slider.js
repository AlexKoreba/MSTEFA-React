import { useState } from "react";

import "./Slider.css";

import slide_1 from "./img/slide-1.jpg";
import slide_2 from "./img/slide-2.jpg";
import slide_3 from "./img/slide-3.jpg";
import arrow from "./img/arrow.svg";

const Slider = () => {

    const [workMode] = useState(1)

    const slideCode = 
                    <div 
                        className="slide" id={`slide-${workMode}`} 
                        style={ 
                            workMode === 1 
                            ? {backgroundImage: `url(${slide_1})`, backgroundPosition: "center 20%"} 
                            : workMode === 2 
                            ? {backgroundImage: `url(${slide_2})`, backgroundPosition: "center 35%"} 
                            : workMode === 3
                            ? {backgroundImage: `url(${slide_3})`, backgroundPosition: "center 25%"}
                            : null
                            }>
                        <img src={`slide_${workMode}`} alt={`Slide ${workMode}`} />
                        <div className="slide-content" data-aos="fade-down-right" data-aos-duration="1000">
                            {workMode === 1 
                            ? 
                            <>
                                <h1 className="slide-heading">MSTEFA brand</h1>
                                <p className="slide-subtitle">Belarusian women's clothing brand made from natural fabrics with an emphasis on color</p>
                            </>
                            : null}
                            <a className="btn" href="./contacts.html">Learn more</a>
                        </div>
                    </div>   

    return ( 
        <div className="slider">
            <div id="slider">

                {slideCode}

                {/* <div className="slide" id="slide-1" style={ {backgroundImage: `url(${slide_1})`, backgroundPosition: "center 20%"} }>
                    <img src={slide_1} alt="Slide 1" />
                    <div className="slide-content" data-aos="fade-down-right" data-aos-duration="1000">
                        <h1 className="slide-heading">MSTEFA brand</h1>
                        <p className="slide-subtitle">Belarusian women's clothing brand made from natural fabrics with an emphasis on color</p>
                        <a className="btn" href="./contacts.html">Learn more</a>
                    </div>
                </div>

                <div className="slide" id="slide-2" style={ {backgroundImage: `url(${slide_2})`, backgroundPosition: "center 35%"} }>
                    <img src={slide_2} alt="Slide 2" />
                    <p className="slide-title">Choose your look for today</p>
                    <a className="btn" href="#collection">Start buying</a>
                </div>

                <div className="slide" id="slide-3" style={ {backgroundImage: `url(${slide_3})`, backgroundPosition: "center 25%"} }>
                    <img src={slide_3} alt="Slide 3" />
                    <p className="slide-title">Love and care in each of our products</p>
                    <a className="btn" href="./useful.html">Useful info</a>
                </div> */}

            </div>

            <div className="controls">
                <img id="btnPrev" src={arrow} alt="Arrow's icon" />
                <img id="btnNext" src={arrow} alt="Arrow's icon" />
            </div>
        </div> 
    )
}
 
export default Slider;