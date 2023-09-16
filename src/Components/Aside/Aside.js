import React from "react";
import Carousel from "./Carousel.js";
import slides from "../Assets/carouselData.json";

const Aside = () => {
    return (
        <div className="AsideSection">
            <Carousel data={slides} />
        </div>
    );
};

export default Aside;